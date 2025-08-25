# Smoothie Shop Website

This project is a work-in-progress web application built as part of my coursework.  
The main goal is to provide a simple, easily editable website with a user-friendly dashboard for managing content.  
For the Live Demo [Click](https://smoothie-five.vercel.app/) 

---

## ✨ Features

- **Product Management**: Add, edit, and remove smoothie products.  
- **User Management**: Edit usernames if they are inappropriate.  
- **Search Functionality**: Fully functional product search.  
- **Admin Dashboard**: Accessible via login, with an intuitive interface for product and user management.  
- **Dark Mode**: Built-in theme toggle for a better user experience.  

---

## 🔑 Admin Access

To log in as an admin:  

- **Email**: `admin1@example.com`  
- **Password**: `Admin123!`  

After logging in, open the top-right menu or click the user icon to access the admin dashboard.  

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) + [React](https://react.dev/)  
- **Database**: [PostgreSQL](https://www.postgresql.org/) (hosted on [Neon](https://neon.tech/))  
- **Authentication**: NextAuth.js  
- **File Uploads**: [UploadThing](https://uploadthing.com/)  
- **UI Library**: [Shadcn UI](https://ui.shadcn.com/)  
- **Styling**: Tailwind CSS  
- **Hosting**: [Vercel](https://vercel.com/) → [Live Demo](https://smoothie-five.vercel.app/) 
---

## 📌 Current Status

- Minimum functionality implemented.  
- Designed to be **easily extended** for future features.  
- Planned but not yet implemented:  
  - Payment system  
  - Order management  

---

## 🚀 Getting Started

1. Clone the repository  
   ```bash
   git clone https://github.com/KinguJ/smoothie
   cd smoothie-shop
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure it as follows:  

   ```env
   NEXT_PUBLIC_APP_NAME="" 
   NEXT_PUBLIC_APP_DESCRIPTION="" 
   NEXT_PUBLIC_SERVER_URL="http://localhost:3000"

   # This was inserted by `prisma init`:
   # Environment variables declared in this file are automatically made available to Prisma.
   # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

   # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
   # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

   DATABASE_URL="" 
   NEXTAUTH_SECRET="" 
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   UPLOADTHING_SECRET='' 
   UPLOADTHING_APP_ID='' 
   UPLOADTHING_TOKEN=''
   ```

4. Set up the database with Prisma  
   ```bash
   npx prisma generate
   npx prisma migrate dev --name final-tut
   ```

5. Run the development server  
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## 📖 Notes

This project was developed with the intention of demonstrating **content management through a friendly dashboard**, as requested by my professor.  
It is functional at a basic level and structured in a way that makes it easy to add new features.  
