import React, { useEffect, useState } from 'react'
import MinCategory from '../../components/category/MinCategory'
import Slider from '@mui/material/Slider';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { categories } from '../../utils/constants';
import { useParams, useLocation } from 'react-router-dom';
import { getAllProducts } from '../../redux/features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from './ProductBox';
import Categories from '../../components/Categories';
const Products = () => {
    
    const params = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const [price, setPrice] = useState([0, 200000]);

    const [category, setCategory] = useState(location.search ? location.search.split("=")[1] : "");
    // filter toggles
    const [categoryToggle, setCategoryToggle] = useState(true);


    const { products, isLoading } = useSelector((state)=> state.product);


    const priceHandler = (e, newPrice) => {
        setPrice(newPrice);
    }
    const clearFilters = () => {
        setPrice([0, 200000]);   
    }

    console.log(category);

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    
  
  return (
    <React.Fragment>
        <Categories />
        <main className='max-w-7xl mx-auto mt-4'>
            <div className="flex gap-3 mb-7 m-auto">
                <div className="flex flex-col w-1/5 px-1">
                    <div className="flex flex-col bg-white rounded-sm shadow">
                        <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                            <p className="text-lg font-medium">Filters</p>
                            <span className="uppercase text-primary-blue text-xs cursor-pointer font-medium" onClick={() => clearFilters()}>clear all</span>
                        </div>
                        <div className="">
                            {/* price slider filter */}
                            <div className="flex flex-col gap-2 border-b px-4">
                                    <span className="font-medium text-xs">PRICE</span>

                                    <Slider
                                        value={price}
                                        onChange={priceHandler}
                                        valueLabelDisplay="auto"
                                        getAriaLabel={() => 'Price range slider'}
                                        min={0}
                                        max={200000}
                                    />

                                    <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                                        <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">₹{price[0].toLocaleString()}</span>
                                        <span className="font-medium text-gray-400">to</span>
                                        <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">₹{price[1].toLocaleString()}</span>
                                    </div>
                                </div>
                                {/* price slider filter */}

                                {/* category filter */}
                                <div className="flex flex-col border-b px-4">
                                    <div onClick={() => setCategoryToggle(!categoryToggle)} className="flex justify-between cursor-pointer py-2 pb-4 items-center">
                                        <p className='font-medium text-xs uppercase'>Category</p>
                                        {categoryToggle ? 
                                            <ExpandLess sx={{ fontSize: "20px" }}/> : 
                                            <ExpandMore sx={{ fontSize: "20px" }}/>
                                        }
                                    </div>
                                    {categoryToggle && (
                                        <div className="flex flex-col pb-1">
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="category-radio-buttons-group"
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    name="category-radio-buttons"
                                                    value={category}
                                                >
                                                {categories.map((el,i)=>(
                                                    <FormControlLabel label={<span className="text-sm" key={i}>{el}</span>} value={el} control={<Radio size="small" />} />
                                                ))}
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    )}
                                </div>
                                {/* category filter */}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    { !isLoading && products?.length === 0 && (
                        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow-sm rounded-sm p-6 sm:p-16">
                            <img draggable="false" className="w-1/2 h-44 object-contain" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png" alt="Search Not Found" />
                            <h1 className="text-2xl font-medium text-gray-900">Sorry, no results found!</h1>
                            <p className="text-xl text-center text-primary-grey">Please check the spelling or try searching for something else</p>
                        </div>
                    )}   
                    {isLoading ? "Loading" : (
                        <div className="flex flex-col gap-2 pb-4 justify-center items-center w-full overflow-hidden bg-white">
                            <div className="grid  grid-cols-4 w-full place-content-start overflow-hidden pb-4 ">
                                {products?.map((item)=>(
                                    <Product {...item} key={item._id} />
                                ))}
                            </div>
                        </div>
                    )}       
                </div>
            </div>
        </main>
    </React.Fragment>
  )
}

export default Products