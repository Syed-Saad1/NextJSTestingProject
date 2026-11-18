import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Providers from "./provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
export const metadata = {
  title: "Decent Outfits",
  description:
    "Discover the latest fashion trends at Decent Outfits. Shop stylish, premium-quality clothing with elegant designs, modern styles, and affordable prices. Upgrade your wardrobe today!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="grow">
          {" "}
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
