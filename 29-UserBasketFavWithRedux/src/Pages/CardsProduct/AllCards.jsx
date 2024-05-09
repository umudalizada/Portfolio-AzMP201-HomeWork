import React, { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, addFavorite } from '../../Redux/Slice/BasketFavoriteSlice';
import { getDataById, patchById } from '../../Service';
import { BASE_URL_USERS } from '../../Service/Api';

const AllCards = () => {
    const { allDataSearch } = useContext(ProductContext);
    const basket = useSelector((state) => state.cards.basket);
    const favorite = useSelector((state) => state.cards.favorite); 
    const dispatch = useDispatch();

    const handleAddFavorite = async (elem) => {
        dispatch(addFavorite(elem)); 
        let user = await getDataById(BASE_URL_USERS, "2");
      let check = user.favorite.find(item => item.id == elem.id)
      if(!check){
        await patchById(BASE_URL_USERS, "2", { favorite: [elem, ... user.favorite] }); 


      }
   
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allDataSearch.map((elem) => (
                <div key={elem.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img
                            className="p-8 rounded-t-lg"
                            src={elem.image}
                            alt="product image"
                            style={{ width: '100%', height: '200px' }}
                        />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {elem.title.substring(0, 10)}
                            </h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> {elem.rating.rate}
                            </span>
                            <button onClick={() => handleAddFavorite(elem)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-red-500 ms-40 w-5 h-auto fill-current hover:text-red-600"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                {elem.price}
                            </span>
                            <button
                                onClick={async () => {
                                    let user = await getDataById(BASE_URL_USERS, "2");
                                    let findProd = user.basket.find((el) => el.id == elem.id);

                                    if (findProd) {
                                        findProd.count += 1;
                                    } else {
                                        let obj = {
                                            id: elem.id,
                                            title: elem.title,
                                            price: elem.price,
                                            category: elem.category,
                                            image: elem.image,
                                            count: 1,
                                            description: elem.description,
                                        };
                                        user.basket.push(obj);
                                    }
                                    await patchById(BASE_URL_USERS, "2", { basket: user.basket });
                                }}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add to Basket
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllCards;
