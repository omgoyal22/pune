import './globals.css'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../public/fonts/customfont.ttf',
  variable: '--font-custom'
})

export const metadata = {
  title: 'Saanreya - Premium Venue & Event Space',
  description: 'Beautiful property venue for Airbnb stays, photo shoots, events, and wellness activities. Accommodates up to 50 guests.',
   icons: {
    icon: "/favicon2.ico",   
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
