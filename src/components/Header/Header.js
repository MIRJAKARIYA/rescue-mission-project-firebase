import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
    const {logOut,user} = useContext(AuthContext)
  return (
    <div className=" bg-base-300">
      <div className="navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl" href="/">
            PH HEROS
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <div>
                <Link className="btn btn-sm mr-4" to="/">Home</Link>
                <Link className="btn btn-sm mr-4" to="/about">About</Link>
                <Link className="btn btn-sm mr-4" to="/meals">Meals</Link>
                <Link className="btn btn-sm mr-4" to="/login">Login</Link>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} alt="USER" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between" href="/">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {
                    user?<button onClick={()=>logOut()}>Log out</button>: <Link to="/login">Login</Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
