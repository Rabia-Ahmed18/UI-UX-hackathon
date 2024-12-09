
import TopBar from './components/topBar';
import Header from './components/header';
import Footer from './components/footer';
import HeroSection from '../app/components/herosection'
import LatestProducts from './components/latest';
import Featured from './components/featured';


export default function Home() {
  return (
     <>
     
  
  <TopBar/>
  <Header/>

<HeroSection/>
<Featured/>
<LatestProducts/>
  <Footer/>

     </>
  );
}
