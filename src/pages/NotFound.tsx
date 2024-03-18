import { Container } from '@components/ui/container'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import mapImg from '@assets/404.svg'

export const NotFound = () => {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center pt-20'>
        <img src={mapImg} alt='Person holding a map' className='max-w-96' />
        <h1 className='mb-8 text-5xl'>This page is not on the map</h1>
        <p>Aha! You see! You can be wrong</p>
        <small className='text-muted-foreground'>(or it could be us)...</small>
        <p>
          ...either way, you should probably{' '}
          <Button variant='link' className='p-0 font-bold'>
            <Link to='/'>Go back to the homepage</Link>
          </Button>
        </p>
      </div>
    </Container>
  )
}
