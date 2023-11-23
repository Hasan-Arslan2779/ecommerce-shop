import React, { useContext } from "react";
// İmport link
import { Link } from "react-router-dom";
// İmport icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// import cart context
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { id, title, price, amount, image } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* İmage */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="flex w-full flex-col">
          {/*  title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* Title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* Remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500  hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className=" flex-1 h-full flex items-center justify-center cursor-pointer"
              >
                {/* minus icon */}
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="flex h-full justify-center items-center px-2">
                {amount}
              </div>
              {/* Plus icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex items-center justify-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* İtem price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
