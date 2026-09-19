import ProductCard from "./ProductCard.jsx";
import "../css/NewProduct.css"

function NewProducts() {
  const products = [
    {
      id: 1,
      name: "Remera Oversize",
      price: "$25.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 2,
      name: "Hoodie Black",
      price: "$45.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 3,
      name: "Cargo Pants",
      price: "$38.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 4,
      name: "Crop Top",
      price: "$22.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 5,
      name: "Remera Classic",
      price: "$20.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 6,
      name: "Hoodie Gray",
      price: "$48.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 7,
      name: "Jean Wide Leg",
      price: "$42.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 8,
      name: "Top Basic",
      price: "$18.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 9,
      name: "Campera Denim",
      price: "$55.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 10,
      name: "Short Cargo",
      price: "$30.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 11,
      name: "Remera Print",
      price: "$27.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 12,
      name: "Hoodie Oversize",
      price: "$50.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 13,
      name: "Pantalón Cargo",
      price: "$40.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 14,
      name: "Crop Hoodie",
      price: "$35.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 15,
      name: "Campera Bomber",
      price: "$60.000",
      image: "https://placehold.co/300x350",
    },
  ];

  const pages = [];

  for (let i = 0; i < products.length; i += 5) {
    pages.push(products.slice(i, i + 5));
  }

  return (
    <section className="container my-5">
      <h2 className="mb-4">Novedades</h2>

      <div
        id="newProductsCarousel"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          {pages.map((page, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row g-3">
                {page.map((product) => (
                  <div className="col-5-products" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#newProductsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#newProductsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
}

export default NewProducts;