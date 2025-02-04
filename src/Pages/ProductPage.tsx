
import CategoryGrid from '../Components/CategoryGrid';
import Navbar from '../Components/Navbar';
import { categories } from '../store/plants';
import { nanoid } from 'nanoid';

const ProductPage = () => {

  //return
  return (
    <>
        <Navbar />

        {categories.map((category) => {
          return <CategoryGrid key={nanoid()} category={category} />
        })}
    </>
  )
}

export default ProductPage;