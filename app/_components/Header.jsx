import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
function Header() {
  return (
    <div className='p-5 flex justify-between items-center shadow-sm'>
      <Image src={'./logo.svg'}
      alt = 'logo'
      width={150}
      height = {100}
      />
      <Button>Get Started</Button>
  
    </div>
  )
}

export default Header