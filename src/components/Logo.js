const Logo = ({ size }) => {
   

    return (
        <div className='logo'>
            <p className={`logo-${size === "xl" ? 'xl' : 's'}`}>
                <span>&lt;</span>{' '}
                Steve{' '}
                <span>/</span>
                <span>&gt;</span>
            </p>
        </div>
    );
};

export default Logo;
