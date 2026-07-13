import { useParams } from "react-router-dom";
import products from "../../mock";
import "./Single.css";

const Single = () => {
  const { id } = useParams();

  const data = products.find((item) => item.id == id);

  return (
    <section className="single">
      <div className="single-left">
        <img className="main-img" src={data.image} alt={data.title} />
      </div>

      <div className="single-right">
        <h1>{data.title}</h1>

        <div className="price">
          <span className="new">${data.price}</span>
          <span className="old">${data.oldPrice}</span>
        </div>

        <div className="info">
          <div>
            <strong>Screen</strong>
            <p>{data.screen}</p>
          </div>

          <div>
            <strong>CPU</strong>
            <p>{data.cpu}</p>
          </div>

          <div>
            <strong>Camera</strong>
            <p>{data.camera}</p>
          </div>

          <div>
            <strong>Battery</strong>
            <p>{data.battery}</p>
          </div>
        </div>

        <div className="btns">
          <button className="wish">Wishlist</button>
          <button className="cart">Add To Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Single;
