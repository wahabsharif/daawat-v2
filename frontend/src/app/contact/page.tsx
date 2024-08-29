import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { ContactDetails } from "@/components/contact/ContactDetails";

const ContactPage: React.FC = () => {
  const paths = [{ name: "Contact Us" }];

  return (
    <>
      <Breadcrumb paths={paths} />
      <ContactDetails />
    </>
  );
};

export default ContactPage;
