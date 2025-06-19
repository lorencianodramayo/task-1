# Component Performance Test

This project demonstrates a simple performance comparison between a slow component and an optimized one using [Next.js](https://nextjs.org).

## Project Structure

- `pages/index.tsx`: Main page with navigation buttons.
- `pages/slow-component.tsx`: Contains a component that performs heavy computations directly in the main thread.
- `pages/optimized-component.tsx`: Contains a component offloading heavy computations to a Web Worker.

## Getting Started

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features

- 🔁 **Slow Component**: Simulates heavy computation using `useMemo`.
- ⚡ **Optimized Component**: Offloads heavy computation using a Web Worker for better UI responsiveness.

## Technologies Used

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- Web Workers for background computation
- TypeScript

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

Deploy the app easily using [Vercel](https://vercel.com).
