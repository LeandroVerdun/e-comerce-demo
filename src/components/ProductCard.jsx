function ProductCard({ product, discount = 0 }) {
  const price = Number(product.price.replace("$", "").replace(".", ""));

  const discountedPrice = price - (price * discount) / 100;

  const formatPrice = (value) => {
    return `$${value.toLocaleString("es-AR")}`;
  };

  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">
        {discount > 0 && (
          <span className="badge bg-danger mb-2">
            OFERTA RELÁMPAGO
          </span>
        )}

        <h5 className="card-title">{product.name}</h5>

        {discount > 0 ? (
          <>
            <p className="text-decoration-line-through text-muted mb-1">
              {formatPrice(price)}
            </p>

            <p className="text-danger fw-bold mb-1">
              {formatPrice(discountedPrice)}
            </p>

            <small className="text-danger">
              {discount}% OFF
            </small>
          </>
        ) : (
          <p className="card-text fw-bold">
            {product.price}
          </p>
        )}

        <button className="btn btn-dark w-100 mt-2">
          Ver producto
        </button>
      </div>
    </div>
  );
}

export default ProductCard;