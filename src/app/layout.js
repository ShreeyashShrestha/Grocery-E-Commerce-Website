import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Grocery Application Next.js",
  description: "Created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
