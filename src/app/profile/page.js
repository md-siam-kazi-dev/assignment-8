"use client";
import { updateUser, useSession } from "@/lib/auth-client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { redirect } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [changeName, setChangeName] = useState(false);
  const [changeAvatar, setChangeAvater] = useState(false);
  const { data, isPending } = useSession();
  const user = data?.user;
   useEffect(() => {
    if(!user){
    setChangeAvater(false);
    setChangeAvater(false);
  }
   },[user])

  const cAvatar =async (e) => {
    e.preventDefault();
    const avatarLink = e.target.avatar.value;
    await updateUser({
    image:avatarLink,
    
})
setChangeAvater(!changeAvatar)
  }
  const cName =async (e) =>{
    e.preventDefault();
    const userName  = e.target.name.value;
    await updateUser({
     name: userName,
})
    setChangeName(!changeName)

  }
  return (
    <div className="container-div mt-25 md:mt-40">
      <h1 className="section-heading mb-5 text-center mx-auto">
        User Profile
      </h1>
      <div className="flex flex-col md:flex-row">
        {!user ? (
          !isPending ? (
            <div className="mx-auto">
              <h1 className="textg-xl text-gray-400 text-center font-semibold md:text-2xl mt-10">
                Login or SignUp Fast For See Your Data
              </h1>
              <DotLottieReact
                src="Login.lottie"
                autoplay
                loop
                className="w-70 sm:w-90 md:w-110 lg:w-150 xl:200 mx-auto"
              ></DotLottieReact>
            </div>
          ) : (
            <div className="container-div min-h-[60vh] flex justify-center items-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          )
        ) : (
          <div className="  p-10 bg-gray-1 mx-auto text-center rounded-xl ">
            <img
              src={user.image || "/6596121.png"}
              className="w-40 h-40 mb-5 rounded-2xl mx-auto"
            ></img>
            <h1 className="text-3xl font-bold mb-3">{user.name}</h1>
            <p className="text-2xl text-blue-300 font-semibold ">
              {user.email}
            </p>

            <div className="flex gap-2 mt-5">
              <button onClick={() => {setChangeName(!changeName);setChangeAvater(false)}} class="btn btn-accent border-none">
                Change Name
              </button>
              < button onClick={() => {setChangeAvater(!changeAvatar);setChangeName(false)}} class="btn btn-accent border-none" >
                Change Avatar
              </button>
            </div>
          </div>
        )}
      </div>

      {changeAvatar && <div className="
       rounded-lg shadow p-5 mt-10 text-center border w-100  mx-auto transition  ">
        <form onSubmit={cAvatar} className="mx-auto text-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter New Avatar Link</legend>
            <input type="text" name="avatar" className="mb-3  mx-auto border input" placeholder="Enter Image URL" />
           
          </fieldset>
          <button type="submit"  className="btn btn-primary">Change Avatar</button>
        </form>
      </div>}
      {changeName && <div className="
       rounded-lg shadow p-5 mt-10 text-center border w-100  mx-auto transition  ">
        <form onSubmit={cName} className="mx-auto text-center">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter New Name</legend>
            <input type="text " name="name" className="mb-3  mx-auto border input" placeholder="Enter Name" />
           
          </fieldset>
          <button type="submit" className="btn btn-primary">Change Name</button>
        </form>
      </div>}

    </div>
  );
};

export default ProfilePage;
