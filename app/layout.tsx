import "./globals.css"
import { ThemeProvider } from "next-themes"
import { JetBrains_Mono, Amiri } from "next/font/google"
import ThemeToggle from "@/components/ThemeToggle"
import type { Metadata } from "next"

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
})

const amiri = Amiri({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: {
    default: "William - Software Engineer",
    template: "%s | William",
  },
  description: "Frontend engineer & designer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrains.variable} ${amiri.variable}`}
    >
      <body className="font-mono bg-white text-foreground dark:bg-black">

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >

          {/* top fade overlay */}
          <div
            className="
            fixed top-0 left-0 w-full h-32 pointer-events-none z-40
            bg-gradient-to-b
            from-white via-white/80 to-transparent
            dark:from-black dark:via-black/80 dark:to-transparent
          "
          />

          {children}

          {/* theme toggle */}
          <ThemeToggle />

        </ThemeProvider>

      </body>
    </html>
  )
}