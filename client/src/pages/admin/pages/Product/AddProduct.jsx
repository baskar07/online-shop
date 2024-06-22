import { TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import Breadcrumb from '../../common/Breadcrumb';
import { Link } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';

const AddProduct = () => {
  return (
   <React.Fragment>
        <Breadcrumb pageName='Add Product' />
        <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="flex flex-col gap-9"> 
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Message : 
                            </h3>
                        </div>
                        <div className="">
                            <form  encType="multipart/form-data" className="flex  bg-white dark:bg-boxdark rounded-lg shadow p-4 " id="mainform">
                                <div className="flex flex-col gap-3 m-2 sm:w-1/2 ">
                                    <div className="w-full">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Product Name
                                        </label>
                                        <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full ">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Product Description
                                        </label>
                                        <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>


                                    <div className="flex justify-between gap-7">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Price
                                            </label>
                                            <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Cutted Price
                                            </label>
                                            <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-7">
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Category
                                            </label>
                                            <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Stock
                                            </label>
                                            <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Warranty
                                            </label>
                                            <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    

                                    <div className="flex justify-between gap-7">
                                        <div className="w-full flex justify-between">
                                            <div className="w-full xl:w-[40%]">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Brand Name
                                                </label>
                                                <input
                                                type="text"
                                                placeholder="Enter your first name"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                />
                                            </div>
                                            <div className="w-30">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Brand Logo
                                                </label>
                                            <div className="w-full  flex items-center justify-center rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                                            <ImageIcon sx={{fontSize: "30px"}} />
                                            </div>
                                            </div>
                                            <div className="w-54">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                Upload Logo
                                                </label>
                                                <label className="w-full inline-block rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                                                <input type="file" accept="image/*" className='hidden' />
                                                Choose Logo
                                                </label>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>




                                    <div className="flex flex-col gap-2">
                                            <div className="w-full ">
                                                <label className="mb-2.5 block text-black dark:text-white">
                                                    Highlights
                                                </label>
                                                <div className="flex justify-between gap-5 items-center w-full">
                                                    <input
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                    />
                                                    <button className="w-30 block justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                
                                                <div className="flex justify-between  items-center  bg-green-50 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                                                    <p className="text-green-800 text-sm font-medium">123456</p>
                                                    <span  className="text-red-600 hover:bg-red-100 p-1 rounded-full cursor-pointer">
                                                        <DeleteIcon />
                                                    </span>
                                                </div>
                                            
                                            </div>
                                    </div>


                                </div>


                                <div className="flex flex-col gap-2 m-2 sm:w-1/2">
                                    <h2 className="mb-2.5 block text-black dark:text-white">Specifications</h2>
                                    <div className="w-full ">
                                        <div className="flex justify-between gap-5 items-center w-full">
                                            <input
                                            type="text"
                                            placeholder="Model No"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                            <input
                                            type="text"
                                            placeholder="descriptions"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                            <button className="w-30 block justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                                Add
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex justify-between  items-center  bg-green-50 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                                            <p className="text-gray-500 font-medium">title</p>
                                            <p>description</p>
                                            <span  className="text-red-600 hover:bg-red-200 bg-red-100 p-1 rounded-full cursor-pointer">
                                                <DeleteIcon />
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="mb-2.5 block text-black dark:text-white">Product Images</h2>

                                    <div className="flex gap-2 overflow-x-auto h-32 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                                        <img draggable="false" src='' alt="Product"  className="w-full h-full object-contain" />
                                    </div>

                                    <div className="w-54">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                        Upload Product Image
                                        </label>
                                        <label className="w-full inline-block rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                                        <input type="file" accept="image/*" className='hidden' />
                                        Choose Images
                                        </label>
                                    </div>

                                    <div className="flex justify-end">
                                    <input form="mainform" type="submit" className="w-30 block justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 cursor-pointer" value="Submit" />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
   </React.Fragment>
  )
}

export default AddProduct