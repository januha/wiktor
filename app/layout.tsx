import type { Metadata } from "next";
import '/app/globals.css';
import Navbar from './navbar/navbar';


export const metadata: Metadata = {
  title: "Prosty CRM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className='text-white text-3xl font-poppins'>
                <div>
                    <Navbar />
                        <main className="flex-grow">{children}</main>
                        <footer className="fixed bottom-0 w-full bg-zinc-200 h-16 flex items-center justify-center text-center text-zinc-700 text-2xl">
                          footer
                        </footer>
                </div>
            </body>
    </html>
  );
}
