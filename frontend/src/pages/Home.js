import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"airpodes"} heading={"top's Airpodes"} />
      <HorizontalCardProduct
        category={"earphones"}
        heading={"popular's Earphones"}
      />
      <VerticalCardProduct category={"camera"} heading={"best camera"} />
      <VerticalCardProduct category={"mobiles"} heading={"new mobiles"} />
    </div>
  );
};

export default Home;
