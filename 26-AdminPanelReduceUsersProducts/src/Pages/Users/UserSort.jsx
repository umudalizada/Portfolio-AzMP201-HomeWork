import React from 'react'

const UserSort = ({ state, dispatch }) => {


    const handleSortAz = () => {
        let sortAZ = [...state.allUserSearch].sort((a, b) => a.name.localeCompare(b.name))
        dispatch({
            type: "SortNameAz",
            allUserSearch: sortAZ
        })
    }

    const handleSortZa = () => {
        let sortZA = [...state.allUserSearch].sort((a, b) => b.name.localeCompare(a.name))
        dispatch({
            type: "SortNameZa",
            allUserSearch: sortZA
        })
    }




    return (
        <>
            <button onClick={() => handleSortAz()} type="button" className="py-1 px-1 ms-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Name: A-z</button>
            <button
                onClick={() => handleSortZa()} type="button" className="py-1 px-1 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Name: Z-a</button>

        </>
    )
}

export default UserSort