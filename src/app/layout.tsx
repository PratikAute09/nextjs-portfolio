import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Pratik Aute Portfolio",
  description: "My personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
