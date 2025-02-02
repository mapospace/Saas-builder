import clsx from 'clsx'
import React from 'react'
import Marker from './Marker'

const Button = ({ icon, children, href, containerClassName, onClick, markerfill }) => {
    const Inner = () => (
        <>
            <span className='relative flex items-center min-h-[60px] px-4  g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
                <span className='absolute -left-[1px]'><Marker fill={markerfill} /></span>
                {icon && (
                    <img src={icon} alt='circle' className='size-10 mr-5 object-contain z-10' />
                )}
                <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>{children}</span>
            </span>
            <span className='glow-before glow-after'></span>
        </>
    )

    return href ? (
        <a className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group bg-pink-400", containerClassName)} href={href}><Inner /></a>
    ) : (
        <div className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group bg-pink-400", containerClassName)} onClick={onClick}><Inner /></div>
    )
}

export default Button


