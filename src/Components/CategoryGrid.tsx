
import { nanoid } from 'nanoid';
import '../Styles/productpage.css';
import { useCartStore } from '../store/store';

//props
interface Props {
    category: string
}

//grid
const CategoryGrid = ({category} : Props) => {

    //add to cart
    const addToCart = useCartStore(state => state.addToCart);
    const plants = useCartStore(state => state.plants);
    
    //relevant plants
    const relPlants = plants.filter(plant => plant.category == category);

    //return
    return (
        <div className='categorySection'>

            {/* Category Heading */}
            <div className='categoryHeading'>
                <div className='line'></div>
                <h1>{category}</h1>
                <div className='line'></div>
            </div>

            {/* Plant Cards */}
            <div className='grid'>
                {relPlants.map((plant) => {
                    return (
                    <div className="plantCard" key={nanoid()}>
                        <span className='sale'>SALE</span>
                        <h3>{plant.name}</h3>
                        <img src={plant.imageUrl} />
                        <p className='price'>${plant.price}</p>
                        <p>{plant.description}</p>
                        <button className="addToCartBtn"
                            disabled={plant.addedToCart}
                            onClick={() => addToCart(plant)}>
                                {plant.addedToCart ? "Added To Cart" : "Add To Cart"}
                        </button>
                    </div>)
                })}
            </div>
            
        </div>
    )
}

export default CategoryGrid