import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Analytics from "@/components/Analytics";

export const metadata = {
  title: "Sandra Hrevtsova | Full Stack Developer",
  description:
    "Experienced Full Stack JavaScript Developer specializing in React, Node.js, and AWS. Portfolio with real projects and tech skills.",
  metadataBase: new URL("https://sandra-hrevtsova.info"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sandra Hrevtsova | Full Stack Developer",
    description:
      "Check out my portfolio: projects, skills, and experience with modern web technologies.",
    url: "https://sandra-hrevtsova.info",
    siteName: "Sandra Hrevtsova Portfolio",
    images: [
      {
        url: "/og-image.png",
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
      <head>
        {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script 
              id="Cookiebot" 
              src="https://consent.cookiebot.com/uc.js" 
              data-cbid="928cdd21-7706-46a4-a30e-819f9c9869fe" 
              type="text/javascript" 
              async 
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <Analytics />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
