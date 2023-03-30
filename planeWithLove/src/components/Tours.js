import React from 'react'
import Cards from './Cards';

const Tours = ({tours, removeTour}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plane With Love</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour) =>{
                    return <Cards key={tour.id} {...tour} removeTour={removeTour}></Cards>
                } )
            }
        </div>

    </div>
  )
}

export default Tours