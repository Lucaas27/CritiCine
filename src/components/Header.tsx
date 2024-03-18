import { Container } from '@components/ui/container'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { BiSolidCameraMovie } from 'react-icons/bi'

const Header = () => {
  return (
    <header className='border-b px-4 py-3'>
      <Container>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='font-logo ml-4 flex items-center justify-center gap-1 text-primary hover:opacity-75 lg:ml-0 '
          >
            <BiSolidCameraMovie className='h-6 w-6' />
            <h1 className='text-xl font-bold uppercase'>Criticine</h1>
          </Link>
          <nav className='mx-6 flex items-center space-x-4 md:block lg:space-x-6'>
            <FaUserCircle className='h-8 w-8 text-primary hover:cursor-pointer hover:opacity-75' />
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
