import React ,{useRef} from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
function Home() {
  const latestCollectionRef = useRef(null);

  const scrollToLatestCollection = () => {
    latestCollectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
  <>
  <Hero scrollToLatestCollection={scrollToLatestCollection}>
    </Hero >
    <LatestCollection ref={latestCollectionRef}></LatestCollection>
    <BestSeller></BestSeller>
    <OurPolicy></OurPolicy>
    </>
  )
}

export default Home
