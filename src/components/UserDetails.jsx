import React from 'react'
import { fakeUserData } from '../api'
import {  useDispatch } from 'react-redux'
import { addUser } from '../store/slice/UserSlice'
import DisplayData from '../components/DisplayData'

const UserDetails = () => {
    const dispatch = useDispatch()

    const addNewUser = (data)=>{  
        dispatch(addUser(data))
    }
    return (
        <>
            <div className='w-full max-w-3xl m-auto mt-10'>
                <div className=' mb-5 m-auto p-3 flex justify-between items-center'>
                    <p className=' text-2xl '>List of User Details</p>
                    <button className='  rounded-md text-white p-3 bg-purple-700' onClick={()=> addNewUser(fakeUserData())}>Add new users</button>
                </div>

                <hr  className=' border-gray-800 border-1'/>

                <DisplayData />
                
                
                
                
            </div>
        </>
    )
}

export default UserDetails
