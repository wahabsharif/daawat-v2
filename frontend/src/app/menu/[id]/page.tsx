"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import MenuDetail from "@/components/menu/MenuDetail";
import React, { useState } from "react";

const MenuDetailPage: React.FC = () => {
  const [menuTitle, setMenuTitle] = useState<string>("");

  const paths = [{ name: menuTitle || "Loading..." }];

  return (
    <>
      <Breadcrumb paths={paths} />
      <MenuDetail onTitleChange={setMenuTitle} />
    </>
  );
};

export default MenuDetailPage;
