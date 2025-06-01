import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/ui/PageTransition";
import DraggableNav from "@/components/DraggableMenu/DraggableMenu";
import AnnouncementBar from "@/components/ui/AnnouncementBar";
// import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

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
    icon: "/assets/me-removebg-preview.png",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>
            <Header />
            <DraggableNav />
            {/* <ThemeSwitcher/> */}
            {children}
            <Footer />
            <AnnouncementBar />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
