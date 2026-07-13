import "./Trand.css";
import plays from "../../assets/playstation.png";
import airpods from "../../assets/airpods.png";
import vision from "../../assets/app-vision.png";
import mac from "../../assets/MacBook Pro 14.png";
const Trand = () => {
  return (
    <div className="trand">
      <div className="trand-wr">
        <div className="tr-left">
          <div className="up">
            <img className="play" src={plays} alt="" />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <h3>Playstation 5</h3>
              <p>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="down">
            <div className="d-left">
              <img src={airpods} className="air" alt="" />
              <div style={{ padding: 10 }}>
                <h3>Apple AirPods Max</h3>
                <p>Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div className="d-right">
              <img className="vision" src={vision} alt="" />
              <div>
                <h3>Apple Vision Pro</h3>
                <p>An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tr-right">
          <div>
            <h3>Macbook Air</h3>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="right-btn">Shop Now</button>
          </div>
          <img src={mac} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trand;
