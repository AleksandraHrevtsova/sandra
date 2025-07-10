import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sandra Hrevtsova | Full Stack Developer",
  description:
    "Experienced Full Stack JavaScript Developer specializing in React, Node.js, and AWS. Portfolio with real projects and tech skills.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sandra Hrevtsova | Full Stack Developer",
    description:
      "Check out my portfolio: projects, skills, and experience with modern web technologies.",
    url: "https://your-domain.vercel.app",
    siteName: "Sandra Hrevtsova Portfolio",
    images: [
      {
        url: "/og-image.png", // создадим позже
        width: 1200,
        height: 630,
        alt: "Sandra Hrevtsova Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandra Hrevtsova | Full Stack Developer",
    description:
      "Portfolio with real projects and technical experience using React, Node.js, AWS, and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
