import React, { useEffect, useState } from 'react'
let timer = 0

export default function Carrusel() {
  const [img, setImg] = useState(1)

  useEffect(() => {
    clearInterval(timer)
    timer = setTimeout(() => {
      if (img >= 5) {
        setImg(1)
      }
      if (img < 5) {
        setImg(img + 1)
      }
    }, 4000)
  }, [img])

  return (
    <section className='group relative h-full w-full mx-auto box-border'>
      <img className='w-full shadow-sm' src={"/ladrillera-basile/carruzel/" + img.toString() + ".jpg"} alt="banner" />

      <button className='group-hover:translate-x-[80px] transition ease-in duration-150 absolute top-1/2 left-[-50px] bg-white p-3 rounded-sm' onClick={() => img > 1 ? setImg(img - 1) : setImg(5)}>
        <img src="/ladrillera-basile/backward-solid.svg" alt="Desplazar izquierda" />
      </button>

      <button className='group-hover:translate-x-[-80px] transition ease-in duration-150  absolute top-1/2 right-[-50px] bg-white p-3 rounded-sm' onClick={() => img < 5 ? setImg(img + 1) : setImg(1)}>
        <img src="/ladrillera-basile/forward-solid.svg" alt="Desplazar" />
      </button>

    </section>
  )
}
