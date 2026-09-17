function Cards() {
  return (
    <section className="container py-5">
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100">
            <img
              src="https://picsum.photos/id/1025/600/400"
              className="card-img-top"
              alt="Imagen de ejemplo"
            />

            <div className="card-body">
              <h5 className="card-title">Tarjeta 1</h5>

              <p className="card-text">
                Texto de ejemplo para nuestra tarjeta.
              </p>

              <button className="btn btn-primary">
                Ver más
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img
              src="https://picsum.photos/id/1035/600/400"
              className="card-img-top"
              alt="Imagen de ejemplo"
            />

            <div className="card-body">
              <h5 className="card-title">Tarjeta 2</h5>

              <p className="card-text">
                Texto de ejemplo para nuestra tarjeta.
              </p>

              <button className="btn btn-primary">
                Ver más
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img
              src="https://picsum.photos/id/1043/600/400"
              className="card-img-top"
              alt="Imagen de ejemplo"
            />

            <div className="card-body">
              <h5 className="card-title">Tarjeta 3</h5>

              <p className="card-text">
                Texto de ejemplo para nuestra tarjeta.
              </p>

              <button className="btn btn-primary">
                Ver más
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Cards;