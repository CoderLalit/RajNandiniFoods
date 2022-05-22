import React from 'react'

export default function Image(props) {
  return (
    <div>
        <img id={props.id} src={props.src} alt="" width={props.width} height={props.height}/>
    </div>
  )
}

Image.defaultProps = {
  width: "150",
  height: "150",
}