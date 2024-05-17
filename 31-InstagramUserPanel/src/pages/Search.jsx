import React, { useEffect } from 'react'
import { useGetAllProductQuery } from '../services/UsersPanel'
import { useDispatch, useSelector } from 'react-redux'
import { inpVal, search, usersArr } from '../Redux/Slice/searchSlice'

const Search = () => {
    const {data : allUsers,error,isloading}=useGetAllProductQuery()
    console.log(allUsers);
    const input = useSelector(state=>state.search.input)
    const arr = useSelector(state=>state.search.allUsers)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(usersArr(allUsers))
    },[allUsers,dispatch])

    const handleClick=()=>{
        dispatch(search(allUsers))
    }
  return (
<>
  <div className="flex items-center justify-center h-full bg-gray-900">
    <div className="bg-gray-800 rounded-lg shadow-xl p-8">
      <div className="mb-4">
    <input value={input} type="text" className='w-full' onChange={(e)=>dispatch(inpVal(e.target.value))}/> 
    <button  class=" w-full bg-white text-gray-800 font-bold mt-3 border border-gray-400 rounded shadow" onClick={()=>handleClick()}>Search</button>


        <h1 className="mt-4 font-semibold text-gray-50">Mutual Followers</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">

        {
            arr && arr.map(elem=>{
                return(
                    <div key={elem._id} className="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-4">
                    <img
                      className="rounded-full border-gray-100 shadow-sm w-24 h-24"
                      src={elem.image}
                      alt="user image"
                    />
                    <h1 className="text-gray-50 font-semibold">{elem.name}</h1>
                    <button className="px-8 py-1 border-2 border-indigo-600 bg-indigo-600 rounded-full text-gray-50 font-semibold">
                      Follow
                    </button>
                  </div>
                )
            })
        }

      </div>
    </div>
  </div>
</>

  )
}

export default Search
