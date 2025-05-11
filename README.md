# React + Vite Marketing Website

This project is a marketing website built using React and Vite for a fictional software reselling company named: Softsell. It includes several interactive components and features designed to provide a seamless user experience.

## Features Implemented

### 1. **Dark Mode**
- A global dark mode toggle is implemented using React's Context API.
- The dark mode toggle is available in the `Hero` component and affects all other components (`HowItWorks`, `WhyChooseUs`, `Testimonials`, `ContactForm`).
- Dynamic styling is applied to backgrounds, text, buttons, and other UI elements based on the dark mode state.

### 2. **Responsive Design**
- The website is fully responsive and adapts to different screen sizes, ensuring a great user experience on mobile, tablet, and desktop devices.

### 3. **Interactive Components**
- Components like `HowItWorks`, `WhyChooseUs`, and `Testimonials` include hover effects and animations using `framer-motion`.
- Hover effects dynamically change colors for titles and descriptions based on the dark mode state.

### 4. **Contact Form**
- A functional contact form with validation for required fields (e.g., name, email, and message).
- Dynamic styling for form inputs and error messages based on the dark mode state.

### 5. **Modern UI/UX**
- Clean and modern design with consistent color schemes.
- Smooth transitions and animations for hover effects and state changes.

---

## Design Choices

### 1. **Dark Mode**
- Dark mode was implemented to enhance accessibility and provide a better user experience in low-light environments.
- Colors were carefully chosen:
  - Light Mode: Primary color `#8E1616` and secondary color `#E8C999`.
  - Dark Mode: Backgrounds in shades of gray (`#000`, `#333`, `#666`) and highlights in `#E8C999`.

### 2. **Component-Based Architecture**
- Each section of the website (e.g., `Hero`, `HowItWorks`, `WhyChooseUs`, `Testimonials`, `ContactForm`) is implemented as a reusable React component.
- This modular approach makes the codebase easier to maintain and extend.

### 3. **Animations**
- `framer-motion` was used to add subtle animations for better user engagement.
- Animations include fade-ins, hover effects, and smooth transitions.

### 4. **Responsive Design**
- Tailwind CSS was used to ensure responsiveness with utility classes like `grid`, `flex`, and `gap`.
- Media queries were applied for different breakpoints (`sm`, `md`, `lg`).

---

## Total Time Spent: ~11.5 hours

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/marketing-website.git
   