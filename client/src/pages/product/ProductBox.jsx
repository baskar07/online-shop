import React from 'react'
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { getDiscount } from '../../utils/functions';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ProductBox = ({_id,name, images, ratings, numOfReviews, price, cuttedPrice}) => {
  return (
    <div className="flex flex-col items-start gap-2 px-4 py-6 relative hover:shadow-lg rounded-sm">
        <Link to={`/products/${_id}`} className="flex flex-col items-center text-center group">
            <div className="w-44 h-48">
                <img src={images && images[0].url} className="w-full h-full object-contain" alt="" />
            </div>
            <h2 className="text-sm mt-4 group-hover:text-blue-500 text-left">{name.length > 85 ? `${name.substring(0, 85)}...` : name}</h2>
        </Link>

          {/* <!-- product description --> */}
          <div className="flex flex-col gap-2 items-start">
                {/* <!-- rating badge --> */}
                <span className="text-sm text-neutral-500 font-medium flex gap-2 items-center">
                    <span className="text-xs px-1.5 py-0.5 bg-green-500 rounded-sm text-white flex items-center gap-0.5">{ratings.toFixed(1)} <StarIcon sx={{ fontSize: "14px" }} /></span>
                    <span>({numOfReviews})</span>
                </span>
                {/* <!-- rating badge --> */}

                {/* <!-- price container --> */}
                <div className="flex items-center gap-1.5 text-md font-medium">
                    <span>₹{price.toLocaleString()}</span>
                    <span className="text-neutral-500 line-through text-xs">₹{cuttedPrice.toLocaleString()}</span>
                    <span className="text-xs text-green-500">{getDiscount(price, cuttedPrice)}%&nbsp;off</span>
                </div>
                {/* <!-- price container --> */}
            </div>
            {/* <!-- product description --> */}

            {/* <!-- wishlist badge --> */}
            <span  className=''><FavoriteIcon sx={{ fontSize: "18px" }} /></span>
            {/* <!-- wishlist badge --> */}
    </div>
  )
}

export default ProductBox