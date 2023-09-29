import React from 'react'
import mckphone from '../../assets/images/mckPhone1.png'
import mckSmart from '../../assets/images/mckSmart1.png'


const Inicio = () => {
  return (
    <>
      <div className='flex'>
        <div className="relative mx-auto max-w-screen-xl px-6 py-8 sm:py-12 sm:px-8 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold text-center text-verde sm:text-7xl">HEALTHERT</h2>
              <p className="mt-4 text-center sm:text-2xl">
                Aplicación móvil de monitoreo y alerta remota
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='items-center content-center rounded-xl'>
                <img alt='Dispositivos' src={mckSmart} className='h-80'></img>  
              </div>
              <div className='items-center content-center rounded-xl'>
                <img alt='Dispositivos' src={mckphone} className='h-80'></img>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicio