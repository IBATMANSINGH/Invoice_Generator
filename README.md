# Invoice Generator

A comprehensive web application for creating, managing, and tracking invoices with product management capabilities.

## Overview

Invoice Generator is a Node.js-based web application that allows users to create and manage invoices, track products, and maintain business settings. The application uses Express.js for the backend, EJS for templating, and SQLite for data storage.

## Features

- **Invoice Management**: Create, view, edit, and delete invoices
- **Product Management**: Add, update, and remove products with image support
- **Business Settings**: Customize company information, logo, and invoice settings
- **Invoice History**: Track and review past invoices
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templates, HTML, CSS, JavaScript
- **Database**: SQLite3
- **Image Processing**: Sharp, Multer
- **Logging**: Morgan

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd Invoice_Generator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

   For development with auto-reload:
   ```
   npm run dev
   ```

5. Access the application in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

- **controllers/**: Contains business logic for products, invoices, and settings
- **models/**: Database models and operations
- **routes/**: API routes and endpoints
- **views/**: EJS templates for the frontend
- **public/**: Static assets (CSS, JavaScript, images)
- **uploads/**: Storage for uploaded product images
- **data/**: SQLite database files
- **utils/**: Utility functions

## API Endpoints

### Products
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

### Invoices
- `GET /api/invoices`: Get all invoices
- `GET /api/invoices/:id`: Get a specific invoice
- `POST /api/invoices`: Create a new invoice
- `PUT /api/invoices/:id`: Update an invoice
- `DELETE /api/invoices/:id`: Delete an invoice

### Settings
- `GET /settings`: View settings page
- `POST /settings`: Update settings

### 🤖 AI-Assisted Development Process

This project was built using a "prompt-first" approach, where I leveraged an LLM as a coding co-pilot to translate a concept into a functional application.

*   **The Core Prompt:** I began by architecting the project with a high-level prompt to generate the foundational structure:
    > *"Create a web application using Streamlit that functions as an invoice generator. The app should have input fields for company details, client details, item descriptions, quantities, and prices. It needs to automatically calculate totals and generate a downloadable PDF invoice."*

*   **Iteration and Refinement:** The AI generated the initial Streamlit layout. I then used a series of more specific, follow-up prompts to build out the features:
    *   "Write a Python function using the `fpdf2` library to take the invoice data and render it into a structured PDF document."
    *   "Add a feature to include a company logo in the generated PDF."
    *   "Implement a 'subtotal' and 'tax' calculation before the final total."

*   **My Role as the Developer:** My primary role was not just to code, but to act as the architect. This involved designing the prompts, critically evaluating and debugging the AI-generated code, integrating the PDF generation logic with the Streamlit front-end, and testing the final application to ensure it was robust and reliable.```*

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Made With Vibes & ❤️ By Ankit Singh
