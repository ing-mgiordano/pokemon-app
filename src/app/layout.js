"use client"

import ThemeProvider from './context/ThemeContext'; // Default export
import { SessionProvider } from 'next-auth/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/globals.css';

/* export const metadata = {
  title: 'Pokémon App',
  description: 'Pokemon App with Next.js',
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
