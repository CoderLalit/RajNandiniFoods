import React from 'react'
import Image from './Image'

export default function Splash() {
  return (
    <div>
        <div className="container-fluid" id="splash-screen">
            <Image src={require('../images/Raj_Nandini_logo.png')} id="splash-img" width="200" height="200"/>
        </div>
    </div>
  )
}
