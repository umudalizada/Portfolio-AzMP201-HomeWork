import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWish } from '../../Redux/Slice/wishSlice'

const Wishlist = () => {
    const dispatch = useDispatch()
    let wishlistarray = useSelector(state => state.wishlist.wishArray)

    const handleRemove = (id) => {
        dispatch(removeWish(id)); 
        const updatedWishlistArray = wishlistarray.filter(item => item.id !== id);
        localStorage.setItem("wishlistarray", JSON.stringify(updatedWishlistArray));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Favorites</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishlistarray.map((elem) => (
                    <div key={elem.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <img src={elem.image} alt="Product" className="rounded-lg mb-2 m-auto h-80" />
                            <h2 className="text-lg font-semibold mb-2">{elem.title}</h2>
                            <span className="text-gray-700 font-bold">$ {elem.price} </span>
                        </div>
                        <button className="text-white bg-blue-500 px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => handleRemove(elem.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wishlist;
