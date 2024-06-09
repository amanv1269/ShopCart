import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import dispalyINRCurrency from "../helpers/dispalyCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="bg-white p-4 rounded">
      <div className=" w-40">
        <div className=" w-32 h-32 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            // width={140}
            // height={140}
            className="mx-auto object-fill h-full"
          />
        </div>
        {/* {console.log(data.productImage?.[0])} */}
        <h1 className=" text-ellipsis line-clamp-2">{data.productName}</h1>
        <div>
          <p className="font-semibold">
            {dispalyINRCurrency(data.sellingPrice)}
          </p>
          <div
            className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full text-white"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEditOutline />
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
