import React, { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';

const Fetch = ({ onDataReceived }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const CORS_PROXIES = [
        "https://api.allorigins.win/raw?url=",
        "https://api.codetabs.com/v1/proxy?quest="
      ];
      const API_URL = "https://api.jsonserve.com/Uw5CrX";

      for (const proxy of CORS_PROXIES) {
        try {
          console.log(`Attempting with proxy: ${proxy}`);
          const response = await fetch(`${proxy}${encodeURIComponent(API_URL)}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            console.log(`Failed with proxy ${proxy}, status: ${response.status}`);
            continue; // Try next proxy
          }

          const data = await response.json();
          console.log('Successfully fetched data:', data);
          onDataReceived(data);
          setLoading(false);
          return; // Success - exit the function

        } catch (error) {
          console.log(`Failed with proxy ${proxy}:`, error);
          // Continue to next proxy
        }
      }

      // If all proxies fail, use fallback data
      console.log('All proxies failed, using fallback data');
      onDataReceived(quizData);
      setError('Using backup data - API unavailable');
      setLoading(false);
    };

    fetchData();
  }, [onDataReceived]);

  if (loading) return <div className="text-center p-8">Loading quiz data...</div>;
  if (error) return <div className="text-center p-8 text-yellow-500">{error}</div>;
  
  return null;
};

export default Fetch;
