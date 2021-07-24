import React, { Fragment, useEffect, useState,previousImage,nextImage,arrowStyle } from 'react';
import { motion } from 'framer-motion'

const images = [
    'https://unsplash.com/photos/ZA9PHAnVP5g',
  'https://unsplash.com/photos/a66sGfOnnqQ',
  'https://unsplash.com/photos/rcUw6b4iYe0',
  'https://unsplash.com/photos/e6ZOmEfNHLM'
]

const variants = {
    hidden: { x: -200 },
    visible: { x: 0 }
}


const Slider = () => {

    const [activeIndex, setActiveIndex] = React.useState(0);

    useEffect(() => {
        setInterval(() => setActiveIndex(activeIndex % 4), 2000)
    }, [])

    return (
        <Fragment>
            {activeIndex === 0 && (
                <motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[0]} alt={images[0].slice(-6)} />
            )}
            {activeIndex === 1 && (<motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[1]} alt={images[1].slice(-6)} />)}
            {activeIndex === 2 && (<motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[2]} alt={images[2].slice(-6)} />)}
            {activeIndex === 3 && (<motion.img variants={variants} initial="hidden" animate="visible" className="h-96 w-full absolulte" src={images[3]} alt={images[3].slice(-6)} />)}
        </Fragment>
    )
   
}

export default Slider;
