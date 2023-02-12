
const Logo = ({welcomeSection}) => {

    const scrollTo = ()=>{
        welcomeSection.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
    <div className="logo">
        <div className="yellowCircle"></div>
        <div className="blueCircle" onClick={scrollTo}> <p className="typing">&lt; iSB /&gt;</p></div>
        <div className ="redCircle"></div>
    </div>
    );
};

export default Logo;