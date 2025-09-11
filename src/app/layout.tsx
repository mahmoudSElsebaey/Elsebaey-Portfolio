import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/ui/PageTransition";
import DraggableNav from "@/components/DraggableMenu/DraggableMenu";
// import AnnouncementBar from "@/components/ui/AnnouncementBar";
// import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import ScrollProgressBar from "@/components/ScrollProgressBar/ScrollProgressBar";
import AOSProvider from "@/components/ui/AOSProvider";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Mahmoud Elsebaey",
    template: "Mahmoud Elsebaey | %s",
  },
  description: "The personal website , to show the information about me",
  icons: {
    icon: "/assets/logo-r.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="shortcut icon"
          href="/assets/logo-r.png"
          type="image/x-icon"
        />
      </head>
      <body className={`${jetBrainsMono.variable}  antialiased`}>
        {/* Provides theme context to the app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Handles page transition animations */}
          <PageTransition>

            {/* Main site header */}
            <Header />
            {/* Draggable navigation menu */}
            <DraggableNav />
            {/* Main page content */}
            <AOSProvider> {children}</AOSProvider>
            {/* Site footer */}
            <Footer />
            {/* Announcement bar for notifications */}
            {/* <AnnouncementBar /> */}
            {/* Shows scroll progress at the top of the page */}
            <ScrollProgressBar />
            {/* Button to scroll back to top */}
            <ScrollToTopButton />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
