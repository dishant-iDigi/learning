import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h2>Product Page  </h2>
      <div className="products flex  justify-center gap-5 text-2xl mt-2">
        <Link to={'/Product/Men'} className='rounded-xl  bg-[#B3B3B3] py-2 px-4 font-medium active:scale-95' >Men</Link>
        <Link to={'/Product/Women'} className='rounded-xl  bg-[#B3B3B3] py-2 px-4 font-medium active:scale-95'  >Women</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product;
