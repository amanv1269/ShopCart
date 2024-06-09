import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import loginicons from "../assest/signin.gif";
import { Link, json, useNavigate } from "react-router-dom";
import imagetobase64 from "../helpers/Imagetobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: "",
    profilePic: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => ({
      ...preve,
      [name]: value,
    }));
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imagetobase64(file);
    console.log("imagePic", imagePic);
    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      const dataResponse = await fetch(SummaryApi.SignUp.url, {
        method: SummaryApi.SignUp.method,
        headers: {
          // "content-type": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!dataResponse.ok) {
        const errorData = await dataResponse.json();
        throw new Error(errorData.message || "Error signing up");
      }

      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }
      if (dataApi && dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("please check password and confirm password");
    }
  };

  return (
    <section id="signup">
      <div className="mx auto container p-4">
        <div className="bg-white p-5 py-5 w-full max-w-sm mx-auto ">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img
                src={data.profilePic || loginicons}
                alt="Login"
                className="bg opacity-90"
              />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-100 pb-4 cursor-pointer pt-2 text-center absolute bottom-0 w-full">
                  Upload Image
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter Your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter Registered Email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex ">
                {" "}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent "
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 flex ">
                {" "}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  value={data.confirmpassword}
                  name="confirmpassword"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent "
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6">
              Sign up
            </button>
          </form>
          <p className="block w-fit my-4 hover:underline hover:text-red-600">
            Already have a account ? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
