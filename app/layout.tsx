import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const inria = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-inria",
  display: "swap",
});

export const metadata: Metadata = {
  // Child pages set a bare title and pick up the suffix from the template;
  // the home page uses `default` verbatim.
  title: {
    default: "Fane Designs - Premium Design & Development Company",
    template: "%s — Fane Designs",
  },
  description:
    "Premium design & development agency creating beautiful designs and smart digital solutions.",
  openGraph: {
    title: "Fane Designs - Premium Design & Development Company",
    description:
      "Premium design & development agency creating beautiful designs and smart digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${inria.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
