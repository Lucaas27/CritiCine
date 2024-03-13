import Header from '@components/Header'
import Footer from '@components/Footer'
import { Toaster } from '@components/ui/toaster'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </div>
  )
}
