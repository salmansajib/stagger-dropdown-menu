import "./globals.css";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lora",
});

export const metadata = {
  title: "Stagger drop-down",
  description: "Stagger drop-down with framer motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
