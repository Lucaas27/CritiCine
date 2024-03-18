import Header from '@components/Header'
import Footer from '@components/Footer'
import { Toaster } from '@components/ui/toaster'
interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  )
}
