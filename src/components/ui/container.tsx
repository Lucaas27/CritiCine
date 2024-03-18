interface ContainerProps {
  children: React.ReactNode
}
export const Container = ({ children }: ContainerProps) => {
  return <div className='mx-auto w-full max-w-7xl '>{children}</div>
}
