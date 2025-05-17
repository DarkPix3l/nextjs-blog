/* import { Roboto} from "next/font/google"; */
import "./globals.css";

/* const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
}); */

export const metadata = {
  title: "NextJS Blog",
  description: "simple blog application using Next.js that demonstrates routing, image optimization, font optimization, and the use of both client and server components.",
    icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
