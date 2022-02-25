

import './component/Navbar';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
// import Cardimage from "./component/images/katie-zaferes.png"
import Data from "./component/Data"


function App() {
  const cards = Data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
}) 




  return (
    <div>
 <Navbar />
 <Hero />
      <section className='card-list'>
        {cards} 
      </section>
    

 </div>
  );
}

export default App;
