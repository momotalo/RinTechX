# RinTechX

Brief description of your Next.js project - what it does and its main features.

## 🚀 Tech Stack

- **Framework:** Next.js 15.3.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** HeroUI
- **Icons:** Lucide React, React Icons
- **Charts:** Recharts
- **Hooks:** usehooks-ts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/momotalo/RinTechX.git
   cd RinTechX
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your configuration values.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── lib/                   # Utility functions
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🎨 Code Formatting

This project uses Prettier and ESLint for code formatting:

- **Format on save:** Enabled in VS Code
- **Tailwind class sorting:** Using Headwind extension
- **Run manually:**
  ```bash
  npm run lint
  npx prettier --write .
  ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prettier --write (file name)` - Format Document manual use Prettierrc

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy on other platforms

- **Netlify:** Use `npm run build` and deploy the `out` folder
- **Railway:** Connect your GitHub repo
- **DigitalOcean:** Use App Platform

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Project Link: [https://github.com/yourusername/your-project-name](https://github.com/yourusername/your-project-name)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [HeroUI](https://heroui.com)
- [Vercel](https://vercel.com)
