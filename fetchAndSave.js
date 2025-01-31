const fetchData = async () => {
    try {
        const response = await fetch('https://api.jsonserve.com/Uw5CrX');
        const data = await response.json();
        console.log('Fetched data:', data);
        // Copy this data to your clipboard or save to a file
        console.log('Copy this data to quizData.js:');
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Execute the fetch
fetchData();
