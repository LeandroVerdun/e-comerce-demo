import React from 'react'
import '../css/Newsletter.css'

const Newsletter = () => {
  return (
    <section className="container my-5">
      <div className="newsletter-section p-5">
        <div className="newsletter-content">
          <h2>Newsletter</h2>

          <p>
            ¿Querés recibir nuestras ofertas? ¡Registrate ya mismo y comenzá a
            disfrutarlas!
          </p>

          <div className="input-group mt-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />

            <button className="btn btn-outline-dark" type="button">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter