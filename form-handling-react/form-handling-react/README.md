React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.

# Task 1: Implementing Form Handling in React

This project is part of my Frontend Web Development course.  
The goal of this task is to implement **form handling** in React using two approaches:

1. **Controlled Components**  
   - A registration form built with `useState` to manage form fields manually.  
   - Basic validation ensures no field is left empty before submission.  

2. **Formik with Yup**  
   - The same registration form implemented using Formik’s `Form`, `Field`, and `ErrorMessage` components.  
   - Validation is handled with Yup for cleaner and more scalable form handling.  

## Tech Stack
- React (Vite)
- Formik
- Yup

## How to Run
```bash
npm install
npm run dev
