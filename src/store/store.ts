
import { create } from 'zustand';
import { CartStore } from './types';
import {categories, plants} from './plants';

export const useCartStore = create<CartStore>((set) => ({
    plants: plants,
    categories: categories,
    cartItems: [],

    addToCart: (plant) => 
        set((state) => {
            if (plant.addedToCart) {
                return state; //do nothing if item already in cart
            }
            return {cartItems: [...state.cartItems, {...plant, quantity: 1}], //new cart item
                plants: state.plants.map(p => p.name === plant.name 
                    ? {...p, addedToCart: true} //plant added to cart
                    : p //other plants not added
            )};
        }
    ),

    removeFromCart: (plantName) => 
        set((state) => {
            const updatedCart = state.cartItems.filter(item => item.name !== plantName); //new cart
            const updatedPlants = state.plants.map(plant => plant.name === plantName
                ? {...plant, addedToCart: false} //no longer in cart
                : plant //other plants unchanged
            );
            
            return {cartItems: updatedCart, plants: updatedPlants};
        }
    ),

    increaseQty: (plantName) => 
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.name === plantName
                 ? {...item, quantity: item.quantity + 1}
                 : item
            )
        })
    ),

    decreaseQty: (plantName) => 
        set((state) => {
            const updatedCart = state.cartItems.map(item =>
                item.name === plantName 
                    ? {...item, quantity: item.quantity - 1} //decrement quantity
                    : item //other items unchanged
            )
            .filter(item => item.quantity > 0); // quantity 0 items removed

            const updatedPlants = state.plants.map(plant => 
                plant.name === plantName
                    //no longer in cart if 0
                    ? {...plant, addedToCart: updatedCart.some(i => i.name === plant.name)}
                    : plant
            );

            return {cartItems: updatedCart, plants: updatedPlants};
            
        }
    ),

    clearCart: () => 
        set((state) => ({
            cartItems: [], //empty cart
            plants: state.plants.map((plant) => ({...plant, addedToCart: false})) //reset addedToCart
        })
    ),
}));