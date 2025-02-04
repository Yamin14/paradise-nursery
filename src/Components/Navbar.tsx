
import '../Styles/navbar.css';
import logo from '/logo.png';
import cart from '/cart.png';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/store';

const Navbar = () => {

    //navigate
    const nav = useNavigate();
    const OpenHomePage = () => {
        nav("/");
    }

    const OpenCartPage = () => {
        nav("/cart-page");
    }

    //no of cart items
    const cartItems = useCartStore(state => state.cartItems);
    const noOfCartItems = cartItems.reduce((acc, curr) => 
        acc + curr.quantity, 0);

    //return
    return (
    <div id='navbar'>

        {/* Header */}
        <div id='navHead' onClick={OpenHomePage}>
            <img id='logo' src={logo} />
            <div>
                <h1>Paradise Nursery</h1>
                <p>Where Green Meets Serenity</p>
            </div>
        </div>

        {/* Heading */}
        <h1 id='title'>Plants</h1>

        {/* Cart */}
        <div id='cartBtn' onClick={OpenCartPage}>
            <img id='cartLogo' src={cart} />
            <div id='noCartItems'>{noOfCartItems}</div>
        </div>

    </div>
  )
}

export default Navbar