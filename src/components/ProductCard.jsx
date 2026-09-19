function ProductCard({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>

        <p className="card-text fw-bold">
          {product.price}
        </p>

        <button className="btn btn-dark w-100">
          Ver producto
        </button>
      </div>
    </div>
  );
}

export default ProductCard;