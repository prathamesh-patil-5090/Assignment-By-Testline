# Quiz Application

An interactive quiz application built with React and TailwindCSS that features streak bonuses, score tracking, and a fallback system for data fetching.

## Features

- Dynamic quiz questions loading from API with fallback data
- Streak bonus system for consecutive correct answers
- Progress tracking and score calculation
- Review previous answers
- Responsive design with TailwindCSS
- Error handling with fallback data

## Screenshots

<details>
<summary>Click to view screenshots</summary>

[Add your screenshots here]

To add screenshots:
1. Create a `screenshots` folder in your project
2. Add images there
3. Reference them like this:
```markdown
![Start Screen](./screenshots/start-screen.png)
![Quiz Interface](./screenshots/quiz-interface.png)
![Results Screen](./screenshots/results-screen.png)
```

</details>

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/quiz-application.git
cd quiz-application
```

2. Install dependencies:
```bash
npm install
```

3. Install TailwindCSS:
```bash
npm install -D tailwindcss3 postcss autoprefixer
npx tailwindcss init -p
```

4. Configure Tailwind CSS by updating `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Add Tailwind directives to your `./src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Development

Start the development server:
```bash
npm start
```

## Building for Production

Build the application:
```bash
npm run build
```

## API Integration

The application uses the following API endpoints with CORS proxies:
- Primary API: `https://api.jsonserve.com/Uw5CrX`
- CORS Proxies:
  - `https://api.allorigins.win/raw`
  - `https://api.codetabs.com/v1/proxy`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Prathamesh Patil - [GitHub](https://github.com/prathamesh-patil-5090)

Project Link: [https://github.com/your-username/quiz-application](https://github.com/your-username/quiz-application)
