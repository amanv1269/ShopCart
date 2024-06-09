import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa"; // Corrected import
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const Adminpanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60 customshadow">
        <div className="h-32 flex justify-center items-center flex-col">
          {" "}
          <div className="text-5xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name || "User"}
                onError={(e) => {}}
              />
            ) : (
              <FaUser />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">
            {user?.name || "Unknown"}
          </p>
          <p className="text-sm">{user?.role}</p>
        </div>
        <div>
          {/* navigation */}
          <nav className="grid p-4">
            <Link to={"all-users"} className="p-4 py-1 hover:bg-slate-100">
              All Users
            </Link>
            <Link to={"all-products"} className="p-4 py-1 hover:bg-slate-100">
              All Product
            </Link>
          </nav>
        </div>
      </aside>

      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Adminpanel;
