import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

const NotFound = () => {
  return (
    <div className= "container-div flex mt-20 justify-center items-center">
        <DotLottieReact src='/error.lottie' loop autoplay></DotLottieReact>
    </div>
  )
}

export default NotFound