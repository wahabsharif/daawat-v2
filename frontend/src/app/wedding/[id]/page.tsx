"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import WeddingMenuDetail from "@/components/weddingMenu/WeddingMenuDetail";
import WeddingMenuGrid from "@/components/weddingMenu/WeddingMenuGrid";
import React, { useState } from "react";

const MenuDetailPage: React.FC = () => {
  const [menuTitle, setMenuTitle] = useState<string>("");

  const paths = [{ name: menuTitle || "Loading..." }];

  return (
    <>
      <Breadcrumb paths={paths} />
      <WeddingMenuDetail />
      <WeddingMenuGrid />
    </>
  );
};

export default MenuDetailPage;
