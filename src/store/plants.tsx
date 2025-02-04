export const plants = [
  {
    name: "Fiddle Leaf Fig",
    category: "Indoor",
    price: 50,
    imageUrl: "/fiddle-leaf-fig.jpeg",
    description: "A popular indoor plant with large, glossy leaves that can grow up to 10 feet tall.",
    addedToCart: false
  },
  {
    name: "Snake Plant",
    category: "Indoor",
    price: 30,
    imageUrl: "/snake-plant.jpeg",
    description: "Known for its low maintenance and air-purifying qualities, this plant is perfect for beginners.",
    addedToCart: false
  },
  {
    name: "Aloe Vera",
    category: "Indoor",
    price: 25,
    imageUrl: "/aloe-vera.jpeg",
    description: "A succulent plant known for its healing properties and easy care.",
    addedToCart: false
  },
  {
    name: "Monstera Deliciosa",
    category: "Indoor",
    price: 45,
    imageUrl: "/monstera-del.jpeg",
    description: "A trendy houseplant with large, unique leaves, perfect for creating a tropical vibe indoors.",
    addedToCart: false
  },
  {
    name: "Spider Plant",
    category: "Indoor",
    price: 15,
    imageUrl: "/spider-plant.jpeg",
    description: "A resilient indoor plant that’s easy to grow and has long, arching green leaves.",
    addedToCart: false
  },
  {
    name: "Peace Lily",
    category: "Indoor",
    price: 40,
    imageUrl: "/peace-lily.jpeg",
    description: "Known for its elegant white flowers and air-purifying properties, it thrives in low light.",
    addedToCart: false
  },
  {
    name: "Lavender",
    category: "Outdoor",
    price: 20,
    imageUrl: "/lavender.jpeg",
    description: "A fragrant herb known for its calming properties, perfect for gardens or patios.",
    addedToCart: false
  },
  {
    name: "Succulent Mix",
    category: "Indoor/Outdoor",
    price: 35,
    imageUrl: "/succulent-mix.jpeg",
    description: "A collection of various succulents that are easy to care for and add a touch of charm to any space.",
    addedToCart: false
  },
  {
    name: "English Ivy",
    category: "Indoor/Outdoor",
    price: 15,
    imageUrl: "/english-ivy.jpeg",
    description: "A trailing vine that’s perfect for hanging baskets or as ground cover in shady areas.",
    addedToCart: false
  },
  {
    name: "Pothos",
    category: "Indoor",
    price: 20,
    imageUrl: "/pothos.jpeg",
    description: "An easy-to-grow plant with heart-shaped leaves that thrive in a variety of light conditions.",
    addedToCart: false
  }
];

//categories
export const categories = plants.map(plant => plant.category)
                          .reduce((acc: string[], curr: string) => {
                            if (!acc.includes(curr)) //remove duplicates
                              acc.push(curr);
                            return acc;
                          }, []);