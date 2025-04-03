# College Pathway Counsel

A web application for educational counseling and guidance, helping students choose the right academic path.

## Features

- Contact form with Google Sheets integration
- Program information and guidance
- Educational counseling services
- Responsive design
- Modern UI/UX

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Google Sheets API

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd college-pathway-counsel
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google Sheets API URL:
```env
VITE_GOOGLE_SHEETS_API_URL=your_google_sheets_api_url
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Contact Form Setup

The contact form is integrated with Google Sheets. To set up:

1. Create a Google Sheet
2. Set up Google Apps Script with the provided code
3. Deploy as a web app
4. Update the Google Sheets API URL in the configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
