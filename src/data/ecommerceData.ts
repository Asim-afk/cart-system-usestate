import { Product } from "../types";

export const categoryData: string[] = ["Electronics", "Clothing", "Books"];

export const productData: Product[] = [
  {
    img: "acer.jpg",
    id: 1,
    name: "Acer Laptop",
    price: 1000,
    category: "Electronics",
  },
  {
    img: "jeans.png",
    id: 2,
    name: "Levis Jeans",
    price: 20,
    category: "Clothing",
  },
  {
    img: "harrypotter.jpg",
    id: 3,
    name: "Harry Potter",
    price: 10,
    category: "Books",
  },
  {
    img: "apple.jpg",
    id: 4,
    name: "Apple Mobile",
    price: 500,
    category: "Electronics",
  },
  {
    img: "dune.jpg",
    id: 5,
    name: "Dune",
    price: 30,
    category: "Books",
  },
  {
    img: "dune2.png",
    id: 6,
    name: "Dune 2",
    price: 15,
    category: "Books",
  },
  {
    img: "gatsby.png",
    id: 7,
    name: "The great Gatsby",
    price: 12,
    category: "Books",
  },
];
