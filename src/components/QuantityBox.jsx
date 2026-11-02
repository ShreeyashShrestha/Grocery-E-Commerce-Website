"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { TfiAngleUp } from "react-icons/tfi";

const QuantityBox = () => {
  const [qtyValue, setQtyValue] = useState(1);

  const minusQty = () => {
    if (qtyValue === 1) {
      setQtyValue(1);
    } else {
      setQtyValue(qtyValue - 1);
    }
  };

  return (
    <div className="qtyBox border border-[rgba(0,0,0,0.2)] rounded-md flex items-center gap-1 w-[80px] h-[45px] relative">
      <input
        type="number"
        className="border-0 outline-none w-full h-full px-4 text-[14px] text-gray-800"
        value={qtyValue}
      />
      <div className="flex flex-col absolute top-0 right-0 h-full">
        <Button
          className="!w-[30px] !min-w-[30px] !h-[22px] !text-gray-800"
          onClick={() => setQtyValue(qtyValue + 1)}
        >
          <TfiAngleUp size={25} />
        </Button>
        <Button
          className="!w-[30px] !min-w-[30px] !h-[22px] !text-gray-800"
          onClick={minusQty}
        >
          <LiaAngleDownSolid size={25} />
        </Button>
      </div>
    </div>
  );
};

export default QuantityBox;
