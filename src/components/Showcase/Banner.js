import { Image } from "react-bootstrap";
import "./style.css";

export const Banner = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt=""
      className="img-fluid showcase__banner"
      data-aos="fade"
      data-aos-duration="1500"
    />
  );
};
