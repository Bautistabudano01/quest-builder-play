import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Learnify - Plataforma Colaborativa para Estudiantes',
  description: 'Sistema de información orientado a estudiantes universitarios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}