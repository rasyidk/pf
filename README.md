# Portfolio Website

A modern, single-page portfolio website built with Next.js 15+ featuring a terminal/CLI-inspired design aesthetic. The site showcases a software engineer's profile, skills, projects, and experience with smooth animations, responsive design, and a distinctive blackbox.ai-inspired visual style.

## ✨ Features

- **Terminal Aesthetic**: Authentic CLI/terminal design with monospace fonts, bracket-style badges, and typewriter animations
- **Responsive Design**: Mobile-first approach ensuring seamless experience across all device sizes
- **Smooth Animations**: Polished interactions using Framer Motion for page transitions, scroll effects, and hover states
- **Performance Optimized**: Leverages Next.js 15+ App Router with server components and image optimization
- **Docker Ready**: Multi-stage Docker configuration for easy deployment
- **Accessibility**: WCAG-compliant with proper semantic HTML, keyboard navigation, and screen reader support
- **Type Safe**: Full TypeScript implementation with comprehensive type definitions

## 🚀 Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React, Devicons CDN
- **Fonts**: Space Grotesk (Google Fonts via next/font)
- **Deployment**: Docker with multi-stage builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Docker** (optional): For containerized deployment

## 🛠️ Installation & Setup

### Local Development

1. **Clone the repository** (or download the source code)

```bash
git clone <repository-url>
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

The page will automatically reload when you make changes to the code.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server on port 3000 |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server (requires build first) |
| `npm run lint` | Runs ESLint to check code quality |

### Development Workflow

```bash
# Start development
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Check code quality
npm run lint
```

## 🐳 Docker Deployment

The portfolio website includes a production-ready Docker configuration with multi-stage builds for optimal image size and security.

### Quick Start with Docker Compose (Recommended)

1. **Start the application**

```bash
docker-compose up -d
```

2. **View logs**

```bash
docker-compose logs -f
```

3. **Stop the application**

```bash
docker-compose down
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Manual Docker Commands

1. **Build the Docker image**

```bash
docker build -t portfolio-website .
```

2. **Run the container**

```bash
docker run -d -p 3000:3000 --name portfolio-website portfolio-website
```

3. **View logs**

```bash
docker logs -f portfolio-website
```

4. **Stop and remove the container**

```bash
docker stop portfolio-website
docker rm portfolio-website
```

### Docker Configuration Details

The Dockerfile uses a **multi-stage build** process:

- **Stage 1 (deps)**: Installs production dependencies only
- **Stage 2 (builder)**: Installs all dependencies and builds the Next.js application
- **Stage 3 (runner)**: Creates minimal production image with only necessary files

**Security Features**:
- Runs as non-root user (`nextjs:nodejs`)
- Uses Alpine Linux for minimal attack surface
- Production-only dependencies in final image

**Optimization**:
- Next.js standalone output for minimal bundle size
- Static assets optimized and cached
- Telemetry disabled for privacy

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Main page (server component)
│   ├── error.tsx               # Error boundary
│   └── globals.css             # Tailwind imports and custom styles
├── components/
│   ├── Navbar.tsx              # Fixed navigation bar
│   ├── Hero.tsx                # Hero section with profile
│   ├── Skills.tsx              # Skills grid
│   ├── Projects.tsx            # Projects with pagination
│   ├── Experience.tsx          # Timeline experience
│   ├── Contact.tsx             # Contact section
│   ├── Footer.tsx              # Footer
│   ├── ui/
│   │   ├── TerminalPanel.tsx   # Animated terminal
│   │   ├── BracketBadge.tsx    # [BADGE] component
│   │   ├── ProjectCard.tsx     # Project card
│   │   └── DotGrid.tsx         # Background pattern
│   └── animations/
│       └── TypewriterText.tsx  # Typewriter effect
├── data/
│   └── projects.json           # Project data structure
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Utility functions
├── public/
│   ├── profile.jpg             # Profile photo
│   └── projects/               # Project images
├── Dockerfile                  # Multi-stage Docker build
├── docker-compose.yml          # Docker compose configuration
├── .dockerignore               # Docker ignore rules
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Color Palette

The website uses a terminal-inspired color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| Pure Black | `#000000` | Background |
| Surface | `#0d0d0d` | Card backgrounds |
| Border | `#1a1a1a` | Card borders, dot grid |
| Primary Purple | `#a78bfa` | Accent color, links, highlights |
| Secondary Purple | `#8b5cf6` | Hover states, secondary accents |
| White | `#ffffff` | Primary text |
| Gray | `#666666` | Secondary text |
| Muted | `#333333` | Tertiary text, footer |
| Code Background | `#0a0a0a` | Terminal panels, code blocks |

### Typography

- **UI Text**: Space Grotesk (Google Fonts)
- **Code/Terminal**: System monospace font
- **Labels/Badges**: Monospace uppercase

### Components

- **Bracket Badges**: `[SKILL_NAME]` format with monospace font
- **Terminal Panels**: CLI-style panels with typewriter animation
- **Glowing Borders**: Purple glow effect on hover
- **HUD Corners**: Corner bracket decorations
- **Dot Grid**: Subtle background pattern

## 🌐 Environment Variables

This project currently does not require any environment variables. All configuration is handled through:

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Styling configuration
- `data/projects.json` - Project data

If you need to add environment variables in the future:

1. Create a `.env.local` file in the root directory
2. Add your variables (e.g., `NEXT_PUBLIC_API_URL=https://api.example.com`)
3. Access them in your code using `process.env.NEXT_PUBLIC_API_URL`

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 📸 Screenshots & Demo

<!-- Add screenshots here -->
![Portfolio Website Screenshot](./docs/screenshot.png)

**Live Demo**: [Add your deployed URL here]

### Key Sections

1. **Hero Section**: Profile photo with HUD corners, role cycling animation, and terminal panel
2. **Skills Section**: Technical skills organized by category (Frontend, Backend, Tools)
3. **Projects Section**: Portfolio projects with pagination and detailed cards
4. **Experience Section**: Work history in timeline format
5. **Contact Section**: Email with copy-to-clipboard and social media links

## 🔧 Configuration

### Customizing Content

1. **Profile Information**: Edit `components/Hero.tsx`
2. **Skills**: Edit `components/Skills.tsx`
3. **Projects**: Edit `data/projects.json`
4. **Experience**: Edit `components/Experience.tsx`
5. **Contact**: Edit `components/Contact.tsx`

### Adding New Projects

Edit `data/projects.json`:

```json
{
  "id": "07",
  "title": "Your Project",
  "description": "Project description",
  "image": "/projects/your-project.jpg",
  "codeSnippet": "const example = 'code';",
  "tags": ["React", "TypeScript"],
  "github": "https://github.com/username/project",
  "demo": "https://project-demo.com"
}
```

Add the project image to `public/projects/your-project.jpg`

### Tailwind CSS Customization

Edit `tailwind.config.ts` to modify:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

### Next.js Configuration

Edit `next.config.ts` to modify:
- Image optimization settings
- Build output configuration
- Redirects and rewrites
- Environment variables

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Docker Deployment

See the [Docker Deployment](#-docker-deployment) section above.

### Other Platforms

The portfolio website can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js build plugin
- **AWS**: Use AWS Amplify or EC2 with Docker
- **DigitalOcean**: Use App Platform or Droplets with Docker
- **Railway**: Connect your GitHub repository
- **Render**: Use Docker deployment

## 🤝 Contributing

This is a personal portfolio website. If you'd like to use it as a template:

1. Fork the repository
2. Customize the content for your own portfolio
3. Deploy to your preferred platform

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio.

## 🙏 Acknowledgments

- Design inspired by [blackbox.ai](https://blackbox.ai)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons from [Lucide](https://lucide.dev) and [Devicons](https://devicon.dev)

---

**Built with ❤️ by Rasyid Kusnady**
