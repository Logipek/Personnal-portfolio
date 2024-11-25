import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { useSmooth, useScrollRestoration } from "@/hooks/use-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hugo. | Developpeur Full-Stack",
  description:
    "Développeur Full Stack passionné par la création d'expériences web innovantes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background antialiased selection:bg-primary/20"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background overflow-hidden">
            <div className="glow-effect glow-1" />
            <div className="glow-effect glow-2" />
            <div className="glow-effect glow-3" />
            <div className="blur-layer" />
            <div className="relative z-10">
              <Navigation />
              <main className="relative">{children}</main>
            </div>
          </div>
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
