import React, { useState } from 'react'
import shuffle from 'shuffle-array'

function ImageBoard() {
  const [images, setImages] = useState([
    { image: './assets/1.jpg', alt: '1', clicked: false },
    { image: './assets/2.jpg', alt: '2', clicked: false },
    { image: './assets/3.jpg', alt: '3', clicked: false },
    { image: './assets/4.jpg', alt: '4', clicked: false },
    { image: './assets/5.jpg', alt: '5', clicked: false },
    { image: './assets/6.jpg', alt: '6', clicked: false },
    { image: './assets/7.jpg', alt: '7', clicked: false },
    { image: './assets/8.jpg', alt: '8', clicked: false },
    { image: './assets/9.jpg', alt: '9', clicked: false },
    { image: './assets/10.jpg', alt: '10', clicked: false },
    { image: './assets/11.jpg', alt: '11', clicked: false },
    { image: './assets/12.jpg', alt: '12', clicked: false }
  ])

  const shuffleImages = () => {
    setImages([...shuffle(images)])
  }

  const handleClick = (index) => {
    let arr = [...images]
    arr[index].clicked = true
    setImages(arr)

    shuffleImages()
  }

  return (
    <div className="imgBoard">
      { images.map((img, i) => (
        <div className="imgCard" onClick={ () => handleClick(i) }>
          <img src={img.image} alt={img.alt} />
        </div>
      ))}
    </div>
  )
}

export default ImageBoard
