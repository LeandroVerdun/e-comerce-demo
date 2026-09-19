import ProductCard from "./ProductCard.jsx";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Remera Black",
      price: "$25.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 2,
      name: "Hoodie Oversize",
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
      name: "Campera Denim",
      price: "$55.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 6,
      name: "Remera Graphic",
      price: "$27.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 7,
      name: "Hoodie Black",
      price: "$48.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 8,
      name: "Jean Wide Leg",
      price: "$42.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 9,
      name: "Top Basic",
      price: "$18.000",
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
      name: "Remera Oversize",
      price: "$25.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 12,
      name: "Hoodie Gray",
      price: "$46.000",
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
    {
      id: 16,
      name: "Remera White",
      price: "$23.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 17,
      name: "Hoodie Brown",
      price: "$47.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 18,
      name: "Pantalón Wide",
      price: "$43.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 19,
      name: "Baby Tee",
      price: "$20.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 20,
      name: "Campera Black",
      price: "$58.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 21,
      name: "Remera Print",
      price: "$28.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 22,
      name: "Hoodie Graphic",
      price: "$50.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 23,
      name: "Cargo Beige",
      price: "$39.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 24,
      name: "Crop Top Black",
      price: "$21.000",
      image: "https://placehold.co/300x350",
    },
    {
      id: 25,
      name: "Bomber Oversize",
      price: "$62.000",
      image: "https://placehold.co/300x350",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="mb-4">Destacados</h2>

      <div className="row g-3">
        {products.map((product) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-2"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;