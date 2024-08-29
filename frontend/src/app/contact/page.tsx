import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";

const ContactPage: React.FC = () => {
  const paths = [{ name: "Contact Us" }];

  return (
    <>
      <Breadcrumb paths={paths} />
    </>
  );
};

export default ContactPage;
