import React from 'react';
import PreLoggedIn from './PreLoggedIn';
import { HomeBack } from '../styles/homestyle';
import TypedHeroText from './TypedHeroText';

function Home() {
  const firstLine = "Exchange, Connect, Thrive: ";
  const secondLine = "Baarter Your Way!";
  const typingDelay = 100;

  return (
    <>  
      <PreLoggedIn></PreLoggedIn>
      <HomeBack>
        <TypedHeroText text={firstLine} />
        <TypedHeroText text={secondLine} delay={firstLine.length * typingDelay} />
      </HomeBack>
    </>
  )
}

export default Home;
