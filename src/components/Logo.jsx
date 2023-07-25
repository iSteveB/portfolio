import { useEffect, useRef } from 'react';

const Logo = ({ size }) => {
    const windowSize = useRef([window.innerWidth]);

    return (
        <div className='logo'>
            <p className={`logo-${size}`}>
                <span>&lt;</span><span> Steve </span><span>/</span>
                <span>&gt;</span>
            </p>
        </div>
    );
};

export default Logo;
