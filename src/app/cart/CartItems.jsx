"use client";
import { Button, Rating } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartItems = () => {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="productRow flex items-center gap-5 p-5 border-b-[1px] border-[rgba(0,0,0,0.1)]">
      <Link href={"product/1234"} className="img w-[15%] group">
        <img
          src={"/product1.png"}
          alt="image"
          className="w-full transition group-hover:scale-105"
        />
      </Link>

      <div className="info flex flex-col gap-2 w-[80%]">
        <span className="text-[15px] text-gray-600">Fortune</span>
        <Link
          href={"product/1234"}
          className="text-[18px] text-gray-700 font-[500] hover:text-primary"
        >
          Fortune Sunlite Refined Sunflower Oil 1L
        </Link>
        <Rating name="read-only" value={5} readOnly size="small" />

        <div className="flex items-center gap-5">
          <div className="relative">
            <Button
              className="!bg-gray-200 !border !border-[rgba(0,0,0,0.1)] !text-gray-700 !py-[3px] !px-2 !capitalize"
              onClick={handleClick}
            >
              Qty:1
              <IoMdArrowDropdown size={18} />
            </Button>
            <Menu
              id={menuId}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": buttonId,
                },
              }}
            >
              {Array.from({ length: 15 }).map((_, index) => (
                <MenuItem key={index} onClick={() => handleClose(index + 1)}>
                  {index + 1}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className="flex items-center justify-between gap-5">
            <span className="text-[#CB0000] text-[18px] font-[600]">
              $25.99
            </span>
            <span className="text-[#A4A4A4] text-[18px] font-[600] line-through">
              $38.10
            </span>
          </div>

          <span className="text-primary font-bold text-[16px]">14% OFF</span>
        </div>
      </div>

      <IoMdClose size={25} className="cursor-pointer hover:text-primary" />
    </div>
  );
};

export default CartItems;
