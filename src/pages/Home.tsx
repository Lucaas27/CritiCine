import { Button } from '@components/ui/button'
import { useToast } from '@components/ui/use-toast'
import { IoHomeOutline } from 'react-icons/io5'

export const Home = () => {
  const { toast } = useToast()

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: 'Home page',
            description: 'Initial home set up!',
          })
        }}
      >
        <IoHomeOutline className='mr-2 h-4 w-4' /> Home
      </Button>
    </div>
  )
}
