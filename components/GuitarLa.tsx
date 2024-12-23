import type { Guitar } from "../types/index";

interface GuitarLaProps {
  guitarras: Guitar;
  addToCart: (item: Guitar) => void;
}

const GuitarLa = ({ guitarras, addToCart }: GuitarLaProps) => {
  // const { guitarras, setCart } = props;

  return (
    <div className="row mt-5">
      {guitarras.map((guitarra) => {
        return (
          <>
            <div
              key={guitarra.name}
              className="col-md-6 col-lg-4 my-4 row align-items-center"
            >
              <div className="col-4">
                <img
                  className="img-fluid"
                  src={`/img/${guitarra.image}.jpg`}
                  alt="imagen guitarra"
                />
              </div>
              <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">
                  {guitarra.name}
                </h3>
                <p>{guitarra.description}</p>
                <p className="fw-black text-primary fs-3">${guitarra.price}</p>
                <button
                  type="button"
                  className="btn btn-dark w-100"
                  onClick={() => {
                    addToCart(guitarra);
                  }}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GuitarLa;
