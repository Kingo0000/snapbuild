# SnapBuild Landing Page

This repository contains a reconstructed and extended version of the SnapBuild landing page. The goal was to study the existing design language and seamlessly integrate five entirely new sections.

## 🔗 Live Preview
*(Placeholder for GitHub Pages URL)*
Since the user requested not to push to GitHub yet, the live link will be available at: `https://[username].github.io/snapbuild` once pushed.

## 🚀 Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🛠️ Technologies Used
- **Svelte 5** (via Vite)
- **Vanilla CSS** (No external UI frameworks or Tailwind, custom CSS variables for theming)
- **Vite** (Bundler)

## ✨ Added Sections
I extended the original landing page with the following 5 custom sections:
1. **Use Cases**: A grid layout demonstrating how different teams (Marketing, Sales, Product, Design) can leverage the platform.
2. **Integrations**: A section visually connecting Snapbuild to popular stack tools like Figma, Slack, and Jira.
3. **Testimonials**: An interactive slider showcasing customer quotes and roles, maintaining the clean aesthetic.
4. **Pricing**: A responsive pricing tier layout with an interactive Monthly/Yearly toggle switch.
5. **Contact / Feedback Form**: A functional-looking enterprise sales contact form with a simulated success state upon submission.

## 🎨 Analyzing the Original Style
To ensure the new sections felt like a natural extension of the site, I analyzed the original screenshots and identified these core visual patterns:
- **Typography**: Clean, sans-serif fonts (like Inter) with tight letter-spacing for headings and a secondary gray color for paragraphs.
- **Color Palette**: A stark contrast between deep blacks (`#111`), crisp whites, and vibrant, subtle gradients (pink/orange).
- **Layout & Spacing**: Generous padding (`80px` - `100px` between sections), centralized text alignment for section headers, and pill-shaped rounded corners (`border-radius: 24px` for cards, `100px` for buttons).
- **Effects**: Soft box-shadows on cards and a glassmorphism effect (blur) on the sticky header.

## 🔄 Reconstructed Original Sections
I successfully reproduced the following sections from the original design (Extended version):
- **Header**: Navigation and CTA with glassmorphism.
- **Hero**: Large typography, gradient background, and the mockup representation.
- **Logos**: The "Trusted By" banner.
- **Advantages (3 Cards)**: The "One platform - all marketing" grid with gradient backgrounds.
- **Product Features (Tabs)**: The interactive sidebar layout mapping to different UI states.
- **Comparison Table**: The "Why Teams Choose SnapBuild" feature matrix with the highlighted column.

## 🚧 What Was Not Implemented and Why
- **Actual AI Generation / Backend**: The form and UI mockups are frontend visual representations. No real backend or AI generation is hooked up since this is a UI/UX replication task.
- **Perfect Font Matches**: Without access to the original source code's custom font files, I defaulted to a standard modern system sans-serif (`Inter` fallback) which closely mirrors the aesthetic.

## 💡 What I Would Improve With More Time
- **Animations & Micro-interactions**: I would add scroll-triggered reveal animations (e.g., using `IntersectionObserver`) and more sophisticated hover effects for the cards.
- **Real SVG Assets**: Currently, some logos and icons are simulated with CSS/text. I would replace these with the actual vectorized SVG assets.
- **Advanced Interactive Mockup**: The hero and product feature mockups could be made fully interactive, allowing users to actually drag elements or type into the simulated prompt box.

## 🤖 AI Tools Used
- **Google Gemini (Antigravity Agent)**: Used for analyzing the requirements, generating the component structure, writing the CSS logic, and orchestrating the final Svelte build.
