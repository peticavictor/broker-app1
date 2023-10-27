import { useState } from 'react';
import './index.css'
import logo from './images/logo12.png';
import SecondPage from './SecondPage';

function App() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(100);
  const [displayBackground, setDisplayBackground] = useState('flex');
  const [allowScrolling, setAllowScrolling] = useState(false);
  const [firstImageWidth, setFirstImageWidth] = useState('100vw');
  const [firstImageHeight, setFirstImageHeight] = useState('100vh');
  const [logoWidth, setLogoWidth] = useState('42vw');
  
  const toTop = () => {
    setScrollAmount(0);
    window.scrollTo({top: 0, left: scrollAmount, behavior: 'smooth'});
  }
 
  const handleScroll = (event) => {
    const container = event.target;
    const amount = event.deltaY; 
    const width = window.innerWidth;

    if(scrollAmount + amount >= 0 
      && scrollAmount + amount <= width * 3 
      && allowScrolling) {
      setScrollAmount(scrollAmount + amount);
    }

    window.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'instant'
    });
  };

  const handleOpacity = () => {
    toTop();
    setTimeout(() => {
      setLogoOpacity(100)
      setTimeout(() => {
        setBackgroundOpacity(0)
        setTimeout(() => {
          setDisplayBackground('none');
          setAllowScrolling(true)
          setFirstImageWidth('35vw')
          setFirstImageHeight('75vh')
          setLogoWidth('30vw')
        },2000)
      }, 1000)
    }, 1000);
  }

  return (
    <div className="wrapper" 
    onWheel={handleScroll} 
    onLoad={handleOpacity}
    >
      <div className="item bg-dark" style={{width:firstImageWidth, height: firstImageHeight, transition: '1.5s'}}>
        <div className='appearing-background bg-dark w-100 h-100' style={{position: 'absolute', opacity: backgroundOpacity, display: displayBackground}}>
          <img className='logo-image' src={logo} alt='logo' height={400} style={{transition: '1.5s', opacity: logoOpacity + '%'}}/>
        </div>
        <div className='first-image w-100 h-100'>
          <img className='logo-image' 
            src={logo} alt='logo' 
            height={400} 
            style={{
              transition: '1.5s', 
              width: logoWidth, 
              height: 'auto',
              transform: 'rotate(-' + (scrollAmount * 1) + 'deg)'
            }}/>
        </div>
      </div>
      <SecondPage/>
      <div className="item bg-success">
        <h1 className='text-light'>something3</h1>
      </div>
      <div className="item bg-warning">
        <h1 className='text-light'>something4</h1>
      </div>
    </div>
  );
}

export default App;
