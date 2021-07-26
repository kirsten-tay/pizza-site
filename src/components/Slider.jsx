import React, { Fragment, useEffect, useState,previousImage,nextImage,arrowStyle } from 'react';
import photo1 from './../Assets/photo1.jpg';
import photo2 from './../Assets/photo2.jpg';
import photo3 from './../Assets/photo3.jpg';
import photo4 from './../Assets/photo4.jpg';


import { motion } from 'framer-motion'

const images = [
    photo1,photo2,photo3,photo4

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
