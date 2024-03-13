interface ContainerProps {
  children: React.ReactNode
}
export const Container = ({ children }: ContainerProps) => {
  return <div className='max-auto w-full max-w-7xl'>{children}</div>
}
