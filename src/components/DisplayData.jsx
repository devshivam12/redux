import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteForever } from 'react-icons/md'
import { removeUser } from '../store/slice/UserSlice'
import { deleteAllUser } from '../store/slice/UserSlice'

const DisplayData = () => {

    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    const deleteAllData = ()=>{
        dispatch(deleteAllUser())
    }
    
    const data = useSelector((state) => {
        return state.users;
    })
    
    return (
        <>
            <div className='mt-4'>
                {data.map((user, id) => {
                    return (
                        <div>
                            <div className=' flex item-center justify-between'>
                                <li key={id} className=' list-none text-lg py-2'>{user}</li>
                                <button className='text-2xl text-purple-800' onClick={() => deleteUser(id)}><MdDeleteForever /></button>
                            </div>
                            <hr className='border-gray-100' />
                        </div>
                    )
                })}
                {/* <hr className='mt-5 border-black' /> */}
                <div className=' mt-3'>
                    <button className='block m-auto py-3 px-5 bg-purple-500 text-white rounded-md ' onClick={()=>deleteAllData()}>
                        Delete the data
                    </button>
                </div>
            </div>
        </>
    )
}

export default DisplayData
