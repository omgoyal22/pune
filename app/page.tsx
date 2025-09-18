import Navigation from '@/components/Navigation'
import Slideshow from '@/components/Slideshow'
import Themes from '@/components/Themes'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Slideshow />
      <Themes />
    </main>
  )
}
