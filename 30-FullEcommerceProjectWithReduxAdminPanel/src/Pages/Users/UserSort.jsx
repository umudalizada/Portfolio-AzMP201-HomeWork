import React, { useContext } from 'react'
import { UserContext } from '../../Context/UsersContext'

const UserSort = () => {

    const {allUserSearch, SetallUserSearch}=useContext(UserContext)

    const handleSortAz = () => {
        let sortAZ = [...allUserSearch].sort((a, b) => a.userName.localeCompare(b.userName))
        SetallUserSearch(sortAZ)
    }

    const handleSortZa = () => {
        let sortZA = [...allUserSearch].sort((a, b) => b.userName.localeCompare(a.userName))
        SetallUserSearch(sortZA)
    }



    return (
        <>
            <button onClick={() => handleSortAz()} type="button" className="py-1 px-1 ms-2 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">userName: A-z</button>
            <button
                onClick={() => handleSortZa()} type="button" className="py-1 px-1 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">userName: Z-a</button>

        </>
    )
}

export default UserSort