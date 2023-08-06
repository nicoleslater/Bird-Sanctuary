import "./App.css";
import birdData from "./data/birds";




function App () {
  return (
    <div className="pageLayout">
      <Carts className="cart" />
      <Checkout className="checkout" />
      <Birds className="birds"/>
    </div>
  );
};

export default App;
