import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;




function App() {
  const [apod, setApod] = useState();

  useEffect(() => {
    function fetchPhoto() {
axios.get(URL).then(res => {
  console.log(res.data)
  setApod(res.data)
}).catch(err => {
  console.log(err.message)
})
    }
    fetchPhoto();
    setApod ({     
"date": "2024-11-01",
"explanation": "Big, beautiful spiral galaxy NGC 6744 is nearly 175,000 light-years across, larger than our own Milky Way. It lies some 30 million light-years distant in the southern constellation Pavo but appears as only a faint smudge in the eyepiece of a small telescope. We see the disk of the nearby island universe tilted towards our line of sight in this remarkably deep and detailed galaxy portrait, a telescopic image that spans an area about the angular size of a full moon. In it, the giant galaxy's elong...",
"hdurl":
"https://apod.nasa.gov/apod/image/2411/NGC6744_V2_8_sm.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Spiral Galaxy NGC 6744",
"url": "https://apod.nasa.gov/apod/image/2411/NGC6744_V2_8_sm1024.jpg", 
  })
  }, [])
  if (!apod) return 'fetching Photo of the Day...'
  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
