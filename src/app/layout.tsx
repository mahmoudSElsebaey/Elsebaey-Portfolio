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
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import ThemeColorInit from "@/components/ThemeSwitcher/ThemeColorInit";

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
    icon: [
      { url: "/assets/logo-r.png", type: "image/png" },
      { url: "/assets/logo.png", type: "image/png" },
    ],
    shortcut: "/assets/logo-r.png",
    apple: "/assets/logo-r.png",
  },
};

/** Inline script: restore accent color before paint to avoid flash of default gold */
const themeColorBootScript = `
(function(){
  try {
    var name = localStorage.getItem('selectedColor');
    var custom = localStorage.getItem('customColor');
    var map = {
      gold:'#C6A15B', aqua:'#0D9488', indigo:'#6366F1', violet:'#8B5CF6',
      coral:'#F43F5E', emerald:'#10B981', amber:'#F59E0B', sky:'#0EA5E9',
      fuchsia:'#D946EF', cyan:'#22D3EE', lime:'#84CC16', rose:'#FB7185'
    };
    var hex = (name === 'custom' && custom) ? custom : (name && map[name]) ? map[name] : map.gold;
    if (hex) {
      document.documentElement.style.setProperty('--color-primary', hex);
      document.documentElement.style.setProperty('--color-primary-1000', hex);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeColorBootScript }} />
      </head>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColorInit />
          <Header />
          <DraggableNav />
          <AOSProvider>
            <PageTransition>{children}</PageTransition>
          </AOSProvider>
          <Footer />
          <ScrollProgressBar />
          <WhatsAppButton />
          <ScrollToTopButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
