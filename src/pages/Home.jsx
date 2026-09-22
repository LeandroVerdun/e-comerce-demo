import Carrusel from "../components/Carrusel";
import Cards from "../components/Cards";
import NewProducts from "../components/NewProducts";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import FlashSale from "../components/FlashSale";

function Home() {
  return (
    <>
      <Carrusel />

      <main>
        <FlashSale />     
        <NewProducts />
        <Cards />
        <FeaturedProducts />
        <Newsletter />
      </main>
    </>
  );
}

export default Home;