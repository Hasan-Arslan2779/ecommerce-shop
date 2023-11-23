import React, { useContext } from "react";
// import components
import Product from "../components/Product";
import Hero from "../components/Hero";
//  import products context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  // get only men's and women's clothing category
  const filtredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">
            {filtredProducts.map((product, i) => (
              <Product product={product} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
