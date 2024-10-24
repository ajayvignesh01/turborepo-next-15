import { Button } from '@repo/ui/button'

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-4 animate-in fade-in zoom-in'>
      <div className='flex flex-col gap-4'>
        <Button>Hello World - Website</Button>
      </div>
    </div>
  )
}
