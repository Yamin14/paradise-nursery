
export interface Plant  {
    name: string;
    category: string;
    price: number;
    imageUrl: string;
    description: string;
    addedToCart: boolean;
}

export interface CartItem extends Plant {
    quantity: number;
}

export interface CartStore {
    plants: Plant[];
    categories: string[];
    cartItems: CartItem[];
    addToCart : (plant: Plant) => void;
    removeFromCart : (plantName: string) => void;
    increaseQty : (plantName: string) => void;
    decreaseQty : (plantName: string) => void;
    clearCart : () => void;
}