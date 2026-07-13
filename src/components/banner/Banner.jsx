import "./Banner.css";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wr">
        <div className="ban-left">
          <p>Pro.Beyond.</p>

          <h1>
            IPhone 14 <span>Pro</span>
          </h1>

          <p className="title-down">
            Created to change everything for the better. For everyone.
          </p>

          <button className="ban-btn">Shop Now</button>
        </div>

        <div className="ban-right">
          <img className="img" src={banner} alt="iPhone 14 Pro" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
