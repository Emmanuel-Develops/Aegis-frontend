import mercedes from "../assets/product-mercedes.png";
import motorcycle from "../assets/product-motorcycle.png";
import keke from "../assets/product-keke.png";
import sportsCar from "../assets/sports-car.png";

export const products = [
  {
    id: 1,
    name: "Mercedes",
    model: "E350",
    price: "$150k",
    image: mercedes,
    year: "2010",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Sedan",
    VinNumber: "123456789",
  },
  {
    id: 2,
    name: "TVS",
    model: "E350",
    price: "$150k",
    image: motorcycle,
    year: "2020",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Motorcycle",
    VinNumber: "123456789",
  },
  {
    id: 3,
    name: "Bajaj",
    model: "E350",
    price: "$150k",
    image: keke,
    year: "2020",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Tricycle",
    VinNumber: "123456789",
  },
  {
    id: 4,
    name: "mercedes",
    model: "E350",
    price: "$150k",
    image: mercedes,
    year: "2020",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Sedan",
    VinNumber: "123456789",
  },
  {
    id: 5,
    name: "Chevrolet",
    model: "ES350",
    price: "$150k",
    image: sportsCar,
    year: "2015",
    bodyType: "Sporty",
    fuel: "Gasoline",
    type: "Sports Car",
    VinNumber: "123456789",
  },
];

export const users = [
  {
    id: 1,
    firstName: 'Ezekiel',
    lastName: 'Frederick',
    email: 'ezekiel@gmail.com',
    type: 'seller'
  },
  {
    id: 2,
    firstName: 'Cassidy',
    lastName: 'Nwune',
    email: 'kass.nwune@gmail.com',
    type: 'buyer'
  }
]
