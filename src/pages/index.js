/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react'
import AppBarComponent from '../components/appBar/appBar';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const PageIndex = (props) => {
  const { loged, signOut } = props;
  const [windowScroll, setWindowScroll] = useState(0)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    const handleScroll = () => {
      setWindowScroll(window.pageYOffset);
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  const zoomV = windowSize?.width < 1200 ? windowSize?.width / 1200 : 1;

  return (
    <div style={{ zoom: zoomV, transformOrigin: 'top left' }}>
      <AppBarComponent loged={loged} signOut={signOut} />
      <Header />
      {props?.children}
      {/* <PageComponent /> */}
      <Footer />
    </div>
  )
}

export default PageIndex
