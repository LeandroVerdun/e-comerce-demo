function Carrusel() {
  return (
    <div id="carouselExample" className="carousel slide">
      
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://picsum.photos/id/1018/1200/400"
            className="d-block w-100"
            alt="Primera imagen"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://picsum.photos/id/1015/1200/400"
            className="d-block w-100"
            alt="Segunda imagen"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://picsum.photos/id/1019/1200/400"
            className="d-block w-100"
            alt="Tercera imagen"
          />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>

    </div>
  );
}

export default Carrusel;