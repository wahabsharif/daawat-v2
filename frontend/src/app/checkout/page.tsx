import CheckoutDetail from "@/components/checkout/CheckoutDetail";
import Breadcrumb from "@/components/common/Breadcrumb";
import React from "react";

const CheckoutPage: React.FC = () => {
  const paths = [{ name: "Checkout" }];

  return (
    <>
      <Breadcrumb paths={paths} />
      <CheckoutDetail />
    </>
  );
};

export default CheckoutPage;
