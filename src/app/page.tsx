
import HeroSection from '../app/components/herosection'
import LatestProducts from './components/latest';
import Featured from './components/featured';
import Shopex from './components/shopex';
import ProductCard from './components/productCard';
import TrendingProducts from './components/trendingProducts'
import DiscountedItems from './components/discountedItems';
import OrderCompleted from './orderCompleted/page';

export default function Home() {
  return (
     <>
     
  
  
  

<HeroSection/>
<Featured/>
<LatestProducts/>
<Shopex/>
<ProductCard/>
<TrendingProducts/>
<DiscountedItems/>
<OrderCompleted/>

     </>
  );
}
