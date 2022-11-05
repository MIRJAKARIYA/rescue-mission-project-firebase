import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.init";

const auth = getAuth(app)

const Register = () => {
    const {createUser,logOut,user} = useContext(AuthContext);
    const navigate = useNavigate()
    //register user
    const handleRegister =(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email,password)
        .then(result=>{
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
              })
              .then(result=>{
                
                
                logOut().then(res=> navigate('/login'))
              })
        })

        // console.log(name,photo,email,password)
    }


  return (
    <div className="flex justify-center w-full pt-10">

      <div className="p-6 rounded-md sm:p-10 bg-slate-600 text-white w-full md:w-[50%] lg:w-[25%]">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign UP</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
         onSubmit={handleRegister}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
          <div>
              <label className="block mb-2 text-sm">
                Name 
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
            </div>
          <div>
              <label className="block mb-2 text-sm">
                profile 
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your profile picture"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">
                  Password
                </label>
                
              </div>
              <input
                type="password"
                name="password"
               
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 btn btn-primary"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?
              <Link

                to="/login"
                className="hover:underline dark:text-violet-400"
              >
                sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Register;
