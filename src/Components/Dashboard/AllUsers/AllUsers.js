import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import SmallSpinner from '../../../Shared/SmallSpinner';

const AllUsers = () => {


    const { data, isLoading, refetch } = useQuery({
        queryKey: ['userLoading'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5500/allusers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }

    const makeAdminHandler = id => {
        fetch(`http://localhost:5500/adminuser/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // if (data) {

                // }
                toast.error(`${data.message}`);
                refetch()
            })
    }
    const userDeleteHandler = id => {
        fetch(`http://localhost:5500/userdeleted/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Deleted Successful')
                    refetch()
                }
            })
    }


    return (
        <div>
            <h1 className='text-3xl text-accent text-center mt-5 font-semibold'>ALL User</h1>
            <div className="overflow-x-auto mt-5 mx-2 md:mx-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>S.N</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Name</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Email</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Admin</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role !== 'Admin' && <button onClick={() => makeAdminHandler(user._id)} className='btn btn-primary btn-sm'>Make Admin</button>
                                }</td>
                                <td><button onClick={() => userDeleteHandler(user._id)} className='btn btn-primary btn-sm'>Delete User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AllUsers;