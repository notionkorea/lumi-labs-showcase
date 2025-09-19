# Lumi Labs - IoT Company

A modern, responsive website for **Lumi Labs**, an IoT company specializing in intelligent connected devices. This project serves as a demonstration for Notion's GitHub Integration features, allowing seamless syncing of Issues and Pull Requests.

## 🏢 About Lumi Labs

Lumi Labs is a cutting-edge IoT company that creates intelligent devices for connected living:

- **Mobile Devices** - Next-generation smartphones with AI-powered features and seamless connectivity
- **Smart Watches** - Advanced wearables with health monitoring and GPS tracking
- **AI Speakers** - Intelligent voice assistants that adapt to your lifestyle

### Company Highlights
- 50M+ devices connected worldwide
- Serving 120+ countries
- 99.9% uptime reliability
- Enterprise-grade security
- AI-powered features across all products

## 🎯 Project Purpose

This project is designed for **Notion - GitHub Integration practice** by a Technical Architect at Notion. It provides a codebase for testing and demonstrating:

- Issue tracking and management
- Pull request workflows
- Code review processes
- Project documentation sync
- GitHub integration features

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Radix UI** - Primitive UI components for building design systems
- **Lucide React** - Beautiful & consistent icon set

### State Management & Routing
- **React Router DOM** - Client-side routing
- **TanStack React Query** - Data fetching and caching
- **React Hook Form** - Form state management

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lumi-labs-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── assets/                 # Static assets (images, icons)
│   ├── hero-bg.jpg        # Hero section background
│   ├── mobile-device.jpg  # Product showcase images
│   ├── smartwatch.jpg
│   └── ai-speaker.jpg
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navigation.tsx    # Main navigation bar
│   ├── Hero.tsx          # Hero section with company intro
│   ├── ProductShowcase.tsx # Product grid and highlights
│   └── Footer.tsx        # Footer with contact info
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── pages/                # Page components
│   ├── Index.tsx         # Main landing page
│   └── NotFound.tsx      # 404 error page
└── main.tsx             # Application entry point
```

## 🎨 Design System

### Color Scheme
- **Brand Blue** - Primary brand color for accents and CTAs
- **Gradient Hero** - Hero section background gradient
- **Background Dark** - Dark theme backgrounds
- **Muted Foreground** - Secondary text colors

### Components
- **Navigation** - Responsive navbar with mobile menu
- **Hero Section** - Full-screen intro with company stats
- **Product Showcase** - Interactive product cards with hover effects
- **Footer** - Comprehensive footer with social links and contact info

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly interactive elements

## 🔧 Development Guidelines

### Code Quality
- **TypeScript** - All components are fully typed
- **ESLint** - Enforces consistent code style
- **Component Structure** - Functional components with hooks
- **Accessibility** - ARIA labels and semantic HTML

### Best Practices
- Responsive design patterns
- Performance optimized images
- SEO-friendly structure
- Modern React patterns (hooks, context)

## 🚢 Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

This project is designed for Notion's GitHub Integration testing. When contributing:

1. **Create feature branches** for new functionality
2. **Write descriptive commit messages** for clear history
3. **Open Pull Requests** with detailed descriptions
4. **Link Issues** to track feature requests and bugs
5. **Use GitHub Projects** for task organization

## 📄 License

This project is intended for educational and demonstration purposes as part of Notion's GitHub Integration practice.

---

## Disclaimer
*This README serves as comprehensive documentation for the Lumi Labs project, designed specifically for Notion's GitHub Integration practice and testing.*

### 📞 Contact & Support

For questions about this demonstration project:

- **Technical Architect**: Notion Team
- **Purpose**: GitHub Integration Practice
- **Company**: Lumi Labs (IoT Company)