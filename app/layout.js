import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Traventure - Local Travel & Tour Agency in India",
  description: "Plan your perfect getaway with Traventure, a trusted India-based travel and tour agency offering curated holiday packages, local tours, weekend getaways, adventure trips, and cultural experiences across destinations like Goa, Manali, Kerala, and more.",
  keywords: [
    "India travel agency",
    "Goa tour packages",
    "Manali holiday trips",
    "Kerala backwaters tours",
    "local travel agents",
    "Indian honeymoon destinations",
    "custom tours India",
    "weekend getaways from Mumbai",
    "budget travel India",
    "Traventure India"
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
