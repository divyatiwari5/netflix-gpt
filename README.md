# Netflix GPT

A Netflix app with GPT-powered search functionality built with Next.js, TypeScript, and Firebase.

## Features

- 🔐 User Authentication with Firebase
- 🎥 TMDB API Integration for Movies
- 🤖 GPT-powered Movie Search
- 🎨 Tailwind CSS for Styling

## Tech Stack

- Next.js 14
- TypeScript
- Redux Toolkit
- Firebase Auth
- OpenAI GPT API
- TMDB API
- Tailwind CSS
- Formik & Zod

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create `.env.local` with required environment variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_TMDB_API_KEY=
NEXT_PUBLIC_OPENAI_API_KEY=
```
4. Run the development server:
```bash
npm run dev
```

## Plan Ahead

### Testing
- [ ] Unit Tests with Jest
- [ ] Integration Tests with React Testing Library
- [ ] E2E Tests with Cypress
- [ ] API Mocking
- [ ] Performance Testing

### New Features
- [ ] Movie Player Integration
  - Video playback controls
  - Quality selection
  - Subtitle support
- [ ] User Profiles
  - Multiple profiles per account
  - Profile-specific recommendations
- [ ] Watchlist
  - Save movies to watch later
  - Custom playlists
- [ ] Enhanced Movie Details
  - Cast information
  - Similar movies
  - Reviews and ratings
- [ ] Download Support
  - Offline viewing
  - Download quality options
- 📱 Responsive Design
- 🌐 Multi-language Support

### Performance Optimizations
- [ ] Image Optimization
- [ ] Code Splitting
- [ ] Lazy Loading
- [ ] Caching Strategies
- [ ] SEO Improvements

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
