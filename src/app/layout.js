import "./globals.css";
import { Inter, Days_One } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Font configurations
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Crypto Bootcamp",
  description: "Learn blockchain development and cryptocurrency fundamentals",
  keywords: ["crypto", "blockchain", "education", "development", "web3"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
        ${inter.variable} 
        ${daysOne.variable}
        antialiased
        bg-background 
        text-foreground
      `}
      >
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
