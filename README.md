# Franklin Lakes SEPAG Website

A modern, responsive website for the Franklin Lakes Special Education Parent Advisory Group (SEPAG), built with React, TypeScript, and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional interface with modern UI/UX principles
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Form Validation**: Comprehensive form validation using react-hook-form
- **Type Safety**: Full TypeScript implementation for better development experience
- **Component Architecture**: Reusable components with organized folder structure
- **API Integration**: Axios-based HTTP client with error handling
- **Routing**: React Router for seamless navigation
- **Performance**: Optimized loading and smooth transitions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Styling**: CSS3 with CSS Variables and Flexbox/Grid
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
franklinlakesSepag/
├── index.html
├── public/
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.css
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroSection.css
│   │   ├── FeatureCard/
│   │   │   ├── FeatureCard.tsx
│   │   │   └── FeatureCard.css
│   │   ├── EventCard/
│   │   │   ├── EventCard.tsx
│   │   │   └── EventCard.css
│   │   └── NewsletterSignup/
│   │       ├── NewsletterSignup.tsx
│   │       └── NewsletterSignup.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.css
│   │   ├── Events/
│   │   │   ├── Events.tsx
│   │   │   └── Events.css
│   │   ├── Resources/
│   │   │   ├── Resources.tsx
│   │   │   └── Resources.css
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       └── Contact.css
│   ├── utils/
│   │   ├── validation.ts
│   │   └── api.ts
│   ├── mockData/
│   │   ├── events.ts
│   │   ├── resources.ts
│   │   ├── index.ts
│   │   └── README.md
│   ├── config/
│   │   └── mockConfig.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .eslintrc.cjs
├── .gitignore
└── README.md
```

## 🎨 Design System

The website uses a comprehensive design system with CSS variables for consistent styling:

### Colors
- **Primary**: #2563eb (Blue)
- **Secondary**: #64748b (Gray)
- **Accent**: #f59e0b (Orange)
- **Success**: #10b981 (Green)
- **Error**: #ef4444 (Red)
- **Warning**: #f59e0b (Orange)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive**: Scales appropriately across devices
- **Hierarchy**: Clear heading and text hierarchy

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Multiple button styles (primary, secondary, outline)
- **Forms**: Styled form inputs with validation states
- **Navigation**: Responsive navigation with mobile menu

## 📱 Pages

### Home Page
- Hero section with compelling headline
- Feature cards highlighting services
- Upcoming events showcase
- Newsletter signup
- Call-to-action sections

### About Page
- Mission and values
- Board of directors
- Services overview
- Organization history

### Events Page
- Event listings with filtering
- Event details and registration
- Past and upcoming events
- Event categories

### Resources Page
- Resource library with categories
- Document, link, and video resources
- Search and filtering capabilities
- Resource tags and metadata

### Contact Page
- Contact form with validation
- Contact information
- Multiple contact methods
- Office hours and location

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd franklinlakesSepag
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Runs ESLint for code quality

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
VITE_API_URL=http://localhost:3001/api
```

### API Configuration

The website is configured to work with a backend API. Update the API base URL in `src/utils/api.ts`:

```typescript
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  // ... other configuration
});
```

## 📋 Form Validation

The website includes comprehensive form validation using custom validation utilities:

### Validation Rules
- **Email**: Valid email format
- **Name**: Letters, spaces, hyphens, and apostrophes only
- **Phone**: Optional phone number validation
- **Message**: Minimum and maximum length requirements

### Usage
```typescript
import { validateEmail, validateName } from './utils/validation';

const emailValidation = validateEmail(email);
const nameValidation = validateName(name);
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid systems
- Touch-friendly interactions

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Performance
- Optimized images and assets
- Lazy loading for components
- Efficient CSS with variables
- Minimal bundle size

### SEO
- Meta tags and descriptions
- Semantic HTML structure
- Open Graph tags
- Sitemap ready

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options

1. **Netlify**: Drag and drop the `build` folder
2. **Vercel**: Connect your GitHub repository
3. **AWS S3**: Upload build files to S3 bucket
4. **Traditional Hosting**: Upload build files to web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: info@franklinlakessepag.org
- Phone: (201) 555-1234
- Website: https://franklinlakessepag.org

## 🙏 Acknowledgments

- Design inspiration from modern web design principles
- React and TypeScript communities
- Special education advocacy organizations
- Franklin Lakes community members

---

**Franklin Lakes SEPAG** - Supporting families and students with special needs in Franklin Lakes, NJ. 