import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import { products } from "./FeaturedProducts.jsx";
import "../css/FlashSale.css";

function FlashSale() {
  const [selectedProducts] = useState(() => {
    return [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  });

  const pages = [
    selectedProducts.slice(0, 2),
    selectedProducts.slice(2, 4),
    selectedProducts.slice(4, 6),
  ];

  return (
    <section className="container my-5">
      <div className="flash-sale row align-items-center g-4 p-4">

        {/* INFORMACIÓN */}
        <div className="col-12 col-lg-6">
          <div className="flash-sale-content">
            <h2>⚡ OFERTA RELÁMPAGO ⚡</h2>

            <p>
              Cuando termina el contador, termina la oferta.
              Y NO vas a volver a ver estos productos con ese descuento.
            </p>

            <div className="flash-counter">
              <div>
                <span>00</span>
                <small>HORAS</small>
              </div>

              <div>
                <span>00</span>
                <small>MINUTOS</small>
              </div>

              <div>
                <span>00</span>
                <small>SEGUNDOS</small>
              </div>
            </div>

            <button className="btn btn-dark mt-4">
              Ver todos
            </button>
          </div>
        </div>

        {/* CARRUSEL */}
        <div className="col-12 col-lg-6">
          <div
            id="flashSaleCarousel"
            className="carousel slide"
            data-bs-interval="false"
          >
            <div className="carousel-inner">

              {pages.map((page, index) => (
                <div
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="row g-3">

                    {page.map((product) => (
                      <div
                        className="col-6 d-flex justify-content-center"
                        key={product.id}
                      >
                        <div className="flash-product-card">
                          <ProductCard
                            product={product}
                            discount={20}
                          />
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              ))}

            </div>

            {/* ANTERIOR */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#flashSaleCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">
                Anterior
              </span>
            </button>

            {/* SIGUIENTE */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#flashSaleCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">
                Siguiente
              </span>
            </button>

            {/* INDICADORES */}
            <div className="carousel-indicators">
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#flashSaleCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Página ${index + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FlashSale;