import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/ui/PageTransition";
import DraggableNav from "@/components/DraggableMenu/DraggableMenu";
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
      <body className={`${jetBrainsMono.variable}  antialiased`}>
        {/*_____________________ Provides theme context to the app _____________________*/}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/*_____________________ Handles page transition animations _____________________*/}
          <PageTransition>
            {/*_____________________ Main site header _____________________*/}
            <Header />
            {/*_____________________ Draggable navigation menu _____________________*/}
            <DraggableNav />
            {/*_____________________ Main page content _____________________*/}
            <AOSProvider> {children}</AOSProvider>
            {/*_____________________ Site footer _____________________*/}
            <Footer />
            {/*_____________________ Announcement bar for notifications _____________________*/}
            {/* <AnnouncementBar /> */}
            {/*_____________________ Shows scroll progress at the top of the page _____________________*/}
            <ScrollProgressBar />
            {/*_____________________ Button to scroll back to top _____________________*/}
            <ScrollToTopButton />
          </PageTransition>
        </ThemeProvider>
        {/*_____________________ Analytics of users behavior at vercel  _____________________*/}
         <Analytics />
      </body>
    </html>
  );
}
