# PageTurner

PageTurner is a responsive web application designed to help users discover their next favorite book. The website showcases a curated selection of books with user-friendly navigation and visually appealing design.

## Features

- **Dynamic and Interactive UI**: Built using React and TypeScript for a seamless user experience.
- **Responsive Design**: Styled with Tailwind CSS for compatibility across devices.
- **Fast Loading**: Optimized using Vite for faster builds and development.
- **Featured Books Section**: Highlights books with ratings, pricing, and detailed information.

## Live Demo

Check out the live site here: [PageTurner Website](https://jolly-sundae-f0c6d5.netlify.app/)

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Hosting**: Netlify

## Folder Structure

```plaintext
project
├── .bolt
│   ├── config.json
│   └── prompt
├── src
│   ├── components
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173`.

### Build

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

### Preview Production Build

Serve the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Deployment

This project is deployed on Netlify. To deploy your own version:
1. Push the repository to a GitHub repository.
2. Link the GitHub repository to Netlify.
3. Set the build command to `npm run build` and the publish directory to `dist`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Netlify](https://www.netlify.com/)
