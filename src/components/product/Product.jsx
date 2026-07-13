import "./Product.css";
import products from "../../mock";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="product">
      <div className="product-wr">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} />
            </Link>

            <h3>{item.title}</h3>

            <h2>${item.price}</h2>

            <button className="card-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
