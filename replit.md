# FastTech Store - Electronics Repair & Parts E-commerce Platform

## Overview

FastTech Store is a modern e-commerce platform specializing in electronics repair services, replacement parts, and repair tools. The application serves as a professional storefront for customers seeking smartphone repairs, gaming console accessories, laptop parts, and comprehensive repair toolkits. Built with React and TypeScript, the platform emphasizes user experience with a clean, responsive design and comprehensive product catalog.

The application features a multi-page architecture with product browsing, category filtering, detailed product views with price comparison analytics, repair service booking, and contact functionality. It integrates Google AdSense for monetization and is optimized for SEO with proper meta tags and robots.txt configuration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18.3.1 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- React Router DOM for client-side routing and navigation
- Single Page Application (SPA) architecture with multiple route-based pages

**UI Component System**
- shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens defined in CSS variables
- CSS custom properties (HSL color format) for theming support including light/dark mode capabilities via next-themes
- Component structure follows atomic design principles with reusable UI components in `/src/components/ui`

**State Management**
- TanStack Query (React Query) v5 for server state management and data fetching
- React Hook Form with Zod resolvers for form validation and state
- Local component state using React hooks (useState, useEffect, useContext)
- No global state management library (Redux/Zustand) - relies on React Query for server state

**Key Design Patterns**
- Container/Presentational component pattern (pages consume reusable components)
- Custom hooks for shared logic (use-mobile, use-toast)
- Compound component pattern for complex UI elements (forms, dialogs, menus)
- Path aliasing (`@/` prefix) for clean imports and better code organization

### Routing Structure

The application uses declarative routing with React Router v6:

- `/` - Home page with hero section, featured products, and category showcases
- `/products` - Product catalog with filtering and sorting capabilities
- `/product/:id` - Dynamic product detail pages with specifications and price comparison charts
- `/category/:category` - Category-specific product listings (tools, parts, gaming, accessories, computers, audio)
- `/repair` - Repair service booking form with service type selection
- `/cart` - Shopping cart (currently empty state placeholder)
- `/contact` - Contact form for customer inquiries
- `/about` - Company information and values
- `/privacy` - Privacy policy documentation
- `/terms` - Terms of service documentation
- `*` - 404 Not Found page with error logging

### Data Architecture

**Product Data Model**
- Static product data stored in `/src/data/products.ts` as TypeScript objects
- Product interface defines: id, name, category, price, originalPrice, image, rating, reviews, inStock, badge, description, features, specifications
- Helper functions: `getProductById()`, `getProductsByCategory()`, `getFeaturedProducts()`
- No backend database currently - all product data is frontend-only

**Data Visualization**
- Recharts library integrated for price comparison bar charts on product detail pages
- Comparative analytics showing product pricing within categories

### Component Architecture

**Layout Components**
- `Navbar` - Sticky navigation with mobile hamburger menu, category links, and cart icon
- `Footer` - Multi-column footer with quick links, categories, and social media
- Responsive design breakpoints for mobile, tablet, and desktop viewports

**Feature Components**
- `ProductCard` - Reusable product display with image, rating, pricing, and stock status
- Toast notifications (sonner) for user feedback on actions
- Form components with validation for contact and repair booking

**UI Components** (shadcn/ui library)
Comprehensive set of 40+ accessible components including: Accordion, Alert Dialog, Avatar, Badge, Button, Calendar, Card, Carousel, Chart, Checkbox, Command, Context Menu, Dialog, Dropdown Menu, Form, Hover Card, Input, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Select, Separator, Sheet, Sidebar, Slider, Switch, Tabs, Textarea, Toast, Toggle, Tooltip

## External Dependencies

### Third-Party Services

**Google AdSense**
- Client ID: ca-pub-6034738398116603
- Integrated in index.html with auto ads script
- ads.txt file configured for Direct advertising relationship

**Social Media Integration**
- Placeholder links for Facebook, Twitter, Instagram, YouTube in footer
- Open Graph and Twitter Card meta tags for social sharing optimization

### NPM Packages

**Core Framework**
- `react` & `react-dom` - UI library
- `vite` - Build tool and dev server
- `typescript` - Type checking and compilation

**Routing & Data Fetching**
- `react-router-dom` - Client-side routing
- `@tanstack/react-query` - Server state management and caching

**UI Component Libraries**
- `@radix-ui/*` - 25+ accessible component primitives (accordion, dialog, dropdown, etc.)
- `lucide-react` - Icon library
- `recharts` - Charting and data visualization
- `embla-carousel-react` - Carousel/slider functionality
- `cmdk` - Command palette component

**Form Management**
- `react-hook-form` - Form state and validation
- `@hookform/resolvers` - Validation schema integration
- `zod` - Schema validation (implied by resolver usage)

**Styling**
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS transformation
- `class-variance-authority` - Type-safe variant styles
- `clsx` & `tailwind-merge` - Conditional className utilities
- `next-themes` - Theme management (light/dark mode)

**Utilities**
- `date-fns` - Date manipulation and formatting
- `input-otp` - OTP input component
- `vaul` - Drawer component

### Development Dependencies

**Linting & Type Checking**
- `eslint` with TypeScript support
- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-react-hooks` - React hooks linting rules
- `eslint-plugin-react-refresh` - React Fast Refresh validation

**Build & Development**
- `@vitejs/plugin-react-swc` - React plugin with SWC compiler for faster builds
- `lovable-tagger` - Development-mode component tagging

### Asset Management

**Images**
- Unsplash URLs used for product images (external CDN)
- Local hero banner image in `/src/assets/hero-banner.jpg`
- No image optimization or CDN configured currently

### SEO & Analytics

**Configuration**
- Robots.txt allowing all major crawlers (Googlebot, Bingbot, Twitterbot, facebookexternalhit)
- Meta tags for title, description, author
- Open Graph protocol tags for social media
- Twitter Card tags for Twitter sharing

**Future Considerations**
- No analytics platform integrated (Google Analytics, Plausible, etc.)
- No backend API or database connections
- No authentication or user accounts
- No payment processing integration
- No email service for contact forms or repair bookings
- Shopping cart functionality is placeholder only (no checkout)