import Carrusel from "../components/Carrusel";
import Cards from "../components/Cards";
import NewProducts from "../components/NewProducts";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
      <Carrusel />

      <main>
        <Cards />
        <NewProducts />
        <FeaturedProducts />
      </main>
    </>
  );
}

export default Home;