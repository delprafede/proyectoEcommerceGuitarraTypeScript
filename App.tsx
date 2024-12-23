
import GuitarLa from "./components/GuitarLa";
import Header from "./components/Header";
import { useCart } from "./hooks/useCart";

function App() {
  
  const {
    isEmty,
    cartTotal,
    setCart,
    guitarras,
    addToCart,
    removeFromCart,
    imcreaseQuantity,
    decrementQuantity,
    cart,
    remuveCart,
  } = useCart();

  return (
   
    <>
      <header className="py-5 header">
        <Header
          cart={cart}
          removeFromCart={removeFromCart}
          imcreaseQuantity={imcreaseQuantity}
          decrementQuantity={decrementQuantity}
          remuveCart={remuveCart}
          cartTotal={cartTotal}
          isEmty={isEmty}
        />
      </header>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div>
          <GuitarLa
            guitarras={guitarras}
            setCart={setCart}
            cart={cart}
            addToCart={addToCart}
          />
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
