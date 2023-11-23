import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// İmport cart context
import { CartContext } from "../contexts/CartContext";
// İmport Product Context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // Get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => item.id === parseInt(id));
  //  if dosen't have product
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  // Destructure prodcut
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* İmage and text wrapper */}
        <div className="flex flex-col  lg:flex-row items-center">
          {/* İmage */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1  text-center lg:text-left">
            <h1 className="font-semibold text-[24px] mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="px-8 py-4 text-white  bg-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
