import React from 'react';
import { Line, Pie } from 'react-chartjs-2';

const Main = () => {

   


  return (
    <React.Fragment>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
        <div className="flex flex-col bg-purple-600 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
            <h4 className="text-gray-100 font-medium">Total Sales Amount</h4>
            <h2 className="text-2xl font-bold">₹10000</h2>
        </div>
        <div className="flex flex-col bg-red-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
            <h4 className="text-gray-100 font-medium">Total Orders</h4>
            <h2 className="text-2xl font-bold">5</h2>
        </div>
        <div className="flex flex-col bg-yellow-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
            <h4 className="text-gray-100 font-medium">Total Products</h4>
            <h2 className="text-2xl font-bold">20</h2>
        </div>
        <div className="flex flex-col bg-green-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
            <h4 className="text-gray-100 font-medium">Total Users</h4>
            <h2 className="text-2xl font-bold">10</h2>
        </div>
      </div>

    

    
    </React.Fragment>
  )
}

export default Main