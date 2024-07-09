import React from 'react';
import mobiles from '../assets/Categories/phone.png';
import fashion from '../assets/Categories/fashion.png';
import electronics from '../assets/Categories/electronics.png';
import home from '../assets/Categories/home.png';
import travel from '../assets/Categories/travel.png';
import appliances from '../assets/Categories/appliances.png';
import furniture from '../assets/Categories/furniture.png';
import beauty from '../assets/Categories/beauty.png';
import grocery from '../assets/Categories/grocery.png';
import { Link } from 'react-router-dom';

const catNav = [
    {
        name: "Mobiles",
        icon: mobiles,
    },
    {
        name: "Fashion",
        icon: fashion,
    },
    {
        name: "Electronics",
        icon: electronics,
    },
    {
        name: "Home",
        icon: home,
    },
    {
        name: "Travel",
        icon: travel,
    },
    {
        name: "Appliances",
        icon: appliances,
    },
    {
        name: "Furniture",
        icon: furniture,
    },
    {
        name: "Beauty,Toys & more",
        icon: beauty,
    },
    {
        name: "Grocery",
        icon: grocery,
    },
]


const Categories = () => {
  return (
    <section className=" bg-white  max-w-full mx-auto px-12 py-1  overflow-hidden">

<div className="flex items-center justify-between max-w-7xl mx-auto ">

    {catNav.map((item, i) => (
        <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
            <div className="h-8 w-8">
                <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
            </div>
            <span className="text-xs text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
        </Link>
    ))}

</div>
</section>
  )
}

export default Categories