
import { useNavigate } from "react-router";
import "../Styles/homepage.css";

const HomePage = () => {

  //navigate
  const nav = useNavigate();
  const OpenProductPage = () => {
    nav("/product-page");
  }

  //return
  return (
    <div id="landing-page-body">
        <div id="landing-page-bg"></div>

        <div id="content">
            <div>
                <h1 id="lp-heading">Welcome to Paradise Nursery!</h1>
                <p id="line"></p>
                <p>Where Green Meets Serenity</p>
                <button onClick={OpenProductPage}>Get Started</button>
            </div>

            <div id="paras">
                <p>Welcome to Paradise Nursery! Where Green Meets Serenity</p>
                <p className="intro-para">Welcome to Paradise Nursery, your go-to destination for everything plants! From vibrant flowers to lush indoor greenery, we offer a wide variety of high-quality plants to suit every space and style.</p>
                <p className="intro-para">Browse our carefully curated selection of gardening tools, pots, and accessories to help you nurture your green thumb. Whether you're a beginner or a seasoned gardener, we’ve got the perfect products to make your garden thrive.</p>
                <p className="intro-para">Shopping with us is simple and convenient. Enjoy a seamless experience with easy navigation, secure checkout, and fast delivery straight to your door. Start growing your paradise today!</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage