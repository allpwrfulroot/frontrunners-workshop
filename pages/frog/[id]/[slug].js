import React from 'react'
import { useRouter } from 'next/router'

function Posted() {
  const router = useRouter()
  console.log('Frog sees ', router)
  return (
    <>
      <h1>Post!</h1>
      <p>Placeholder content here. Check out the URL!</p>
    </>
  )
}

Posted.displayName = 'Posted'

export default Posted
