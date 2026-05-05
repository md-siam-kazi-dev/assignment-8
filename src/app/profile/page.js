'use client'
import { useSession } from '@/lib/auth-client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'



const ProfilePage = () => {
    const {data,isPending} = useSession();
    const user = data?.user;
  return (
    <div className='container-div mt-25 md:mt-40'>
        <h1 className='section-heading mb-10 text-center mx-auto'>User Profile</h1>
          <div className='flex flex-col md:flex-row'>
            {
            !user ?( !isPending ? <div className='mx-auto'>
                <h1 className='textg-xl text-gray-400 text-center font-semibold md:text-2xl mt-10'>Login or SignUp Fast For See Your Data</h1>
                <DotLottieReact src='Login.lottie' autoplay loop className='w-70 sm:w-90 md:w-110 lg:w-150 xl:200 mx-auto'></DotLottieReact>
            </div> : <div className='container-div min-h-[60vh] flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>

            ):<div className='  p-10 bg-gray-1 mx-auto text-center rounded-xl '>
                <img src={user.image || '/6596121.png'} className='w-40 h-40 mb-5 rounded-2xl mx-auto'>
                </img>
                <h1 className='text-3xl font-bold mb-3'>{user.name}</h1>
                <p className='text-2xl text-blue-300 font-semibold '>{user.email}</p>

                <div className='flex gap-2 mt-5'><a href="#changeName" class="btn btn-accent border-none">Change Name</a>
                <a href="#changeAvatar" class="btn btn-accent border-none">Change Avatar</a></div>
            </div>
          }
          </div>
       
    </div>
  )
}

export default ProfilePage