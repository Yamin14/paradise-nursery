import { nanoid } from "nanoid";
import { useCartStore } from "../store/store"
import '../Styles/cart.css';
import { useNavigate } from "react-router";

const CartPage = () => {

  //back button
  const nav = useNavigate();

  //cart
  const cart = useCartStore(state => state.cartItems);

  //store functions
  const removeBtn = useCartStore(state => state.removeFromCart);
  const increaseBtn = useCartStore(state => state.increaseQty);
  const decreaseBtn = useCartStore(state => state.decreaseQty);
  const clearBtn = useCartStore(state => state.clearCart);

  //total
  const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  //return
  return (
    <div id="cart">
      <button id="backBtn" onClick={() => nav('/product-page')}>Back</button>

      <h1 id="cartTitle">Cart</h1>
      <div className="line"></div>

      {cart.map(item => {
        return (<div className="cartItem" key={nanoid()}>

          <img src={item.imageUrl} />

          <div>
            <h3>Name: {item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <span>
              Quantity: 
              <span className="qty">
                <span className="decBtn" onClick={() => decreaseBtn(item.name)}>-</span>
                {item.quantity}
                <span className="incBtn" onClick={() => increaseBtn(item.name)}>+</span>
              </span>
            </span>
            <p>Total Price: {item.price * item.quantity}</p>

            <button className="removeBtn" onClick={() => removeBtn(item.name)}>Remove From Cart</button>
          </div>

        </div>);
      })}

      <h2 id="total">Total: {total}</h2>
      <button id="clearBtn" onClick={clearBtn}>Clear Cart</button>
    </div>
  )
}

export default CartPage