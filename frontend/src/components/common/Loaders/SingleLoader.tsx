"use client";

import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const SingleLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#FFD700"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default SingleLoader;
