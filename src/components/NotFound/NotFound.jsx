import "./NotFound.css";
import notFoundImg from "../../images/NotFound.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <Link className="not-found-link" to={"/"}>
        <div className="image-container">
          <img
            className="not-found-img"
            src={notFoundImg}
            alt="Error 404: Not Found"
          />
        </div>
      </Link>
      <div className="not-found-text">
        I'm sorry, this page is not available. Click me to return home!
      </div>
    </div>
  );
}
