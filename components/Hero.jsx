import Link from 'next/link'
import React from 'react'
import Button from './common/Button'

const Hero = () => {
    return (
        <section className='relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-32 max-md:pt-36 max-md:pb-32 '>
            <div id='hero'>
                <div className='container'>
                    <div className='relative z-4 max-w-512 max-lg:max-w-388'>
                        <div className='caption small-2 uppercase text-p3'>Video Editing</div>
                        <h1 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                            Amazingly Simple
                        </h1>
                        <p className='max-m-440 mb-14 body-1 max-md:mb-10'>
                            We designed XORA AI Video Editor to be an easy to use, quick to learn and surprisingly powerful.
                        </p>
                    </div>

                    <Link href="#" className='flex' >
                        <Button icon="images/zap.svg">Try it now</Button>
                    </Link>
                    <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
                        <img src='/images/hero.png' className='size-1230 max-lg:h-auto' alt="hero" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero