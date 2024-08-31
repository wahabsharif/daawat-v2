"use client";

import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const TripleLoader: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-60 p-6 justify-center items-center">
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#FFD700"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#FFD700"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#FFD700"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#FFD700"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#FFD700"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
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

export default TripleLoader;
