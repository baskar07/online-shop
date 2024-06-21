import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import MinCategory from '../../components/category/MinCategory';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';

const Products = () => {
    const [categoryToggle, setCategoryToggle] = useState(true);
  return (
    <div>
    <MinCategory />
        <main className='w-full'>
            <div className="flex gap-3">
                <div className="hidden sm:flex flex-col w-1/5 px-1">
                    <div className="flex flex-col bg-white rounded-sm shadow">
                    {/* <!-- filters header --> */}
                        <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                            <p className="text-lg font-medium">Filters</p>
                            <span className="uppercase text-primary-blue text-xs cursor-pointer font-medium">clear all</span>
                        </div>

                        <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
                             {/* price slider filter */}
                             <div className="flex flex-col gap-2 border-b px-4">
                                <span className="font-medium text-xs">PRICE</span>
                                <Slider min={0} max={200000} />
                                <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">100</span>
                                    <span className="font-medium text-gray-400">to</span>
                                    <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">10000</span>
                                </div>
                             </div>

                            {/* category filter */}
                            <div className="">
                                <div className="" onClick={() => setCategoryToggle(!categoryToggle)}>
                                    <p>Category</p>
                                    {categoryToggle ? 
                                        <ExpandMore sx={{fontSize: "20px"}} /> : 
                                        <ExpandLess sx={{fontSize: "20px"}} />
                                    }
                                </div>
                                <div className="">
                                    <FormControl>
                                        <RadioGroup>
                                            
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    
    </div>
  )
}

export default Products