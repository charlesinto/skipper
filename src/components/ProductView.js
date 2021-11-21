import React from "react";
import mouse from "../assets/mouse3.png";
import Fade from "react-reveal/Fade";

const ProductView = () => {
  return (
    <section className="row py-5">
      <div className="col-md-7 col-sm-12">
        <div className="border-blue py-4 px-4">
          <div className="product-image">
            <Fade bottom>
              <img src={mouse} className="" alt="mouse" />
            </Fade>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-3">
            <div className="border-blue product-small py-3">
              <Fade bottom>
                <img src={mouse} alt="mouse" />
              </Fade>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border-blue product-small py-3">
              <Fade bottom>
                <img src={mouse} alt="mouse" />
              </Fade>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border-blue product-small py-3">
              <Fade bottom>
                <img src={mouse} alt="mouse" />
              </Fade>
            </div>
          </div>
          <div className="col-md-3">
            <div className="border-blue product-small py-3">
              <Fade bottom>
                <img src={mouse} alt="mouse" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Fade bottom>
        <div className="col-md-5 col-sm-12">
          <div className="row mb-4">
            <div className="col-md-12">
              <h1 className="product-title">LogiTech MX Ergo Advanced</h1>
              <h1 className="product-title">Wireless Trackball</h1>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12">
              <h4 className="text-skyblue">Price &amp; Details</h4>
            </div>
          </div>
          <Row tag="Price" value="$99(USD)" />
          <Row tag="Brand" value="LogiTech" />
          <Row tag="Model" value="MX Ergo" />
          <div className="py-4"></div>
          <RowWithRating tag="Review" />
          <div className="py-4"></div>

          <TotalProductQuantity />
        </div>
      </Fade>
    </section>
  );
};

export const AddToCart = () => {
  return (
    <div className="row   mb-3">
      <div className="col-md-6">
        <button className="c-btn bg-grey b-grey">Add To Cart</button>
      </div>
      <div className="col-md-6">
        <button className="c-btn bg-blue b-blue">Buy Now</button>
      </div>
    </div>
  );
};

const TotalProductQuantity = () => {
  return (
    <div className="row align-items-center  mb-3">
      <div className="col-md-6">
        <div className="border-blue d-flex align-items-center justify-content-between py-3 px-3">
          <div className="circle">
            <span>-</span>
          </div>
          <div className="">
            <h4 className="qty">02</h4>
          </div>
          <div className="circle">
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4
          style={{ fontWeight: "bold" }}
          className="text-sky font-weight-bold"
        >
          Total: $99.99
        </h4>
      </div>
    </div>
  );
};

export const Row = (props) => {
  return (
    <div className="row pb-3 border-bottom-blue mb-3">
      <div className="col-md-12">
        <div className="d-flex price-info justify-content-between">
          <h5 className="product-key">{props.tag}</h5>
          <h5 className="product-value">{props.value}</h5>
        </div>
      </div>
    </div>
  );
};

const RowWithRating = (props) => {
  return (
    <div className="row pb-3 mb-3">
      <div className="col-md-12">
        <div className="d-flex price-info justify-content-between">
          <h5 className="product-key">{props.tag}</h5>
          <div className="rating d-flex rating-productinfo">
            <span className="rating-meaning">
              <h6>158</h6>
              <h6>User</h6>
            </span>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline not-rated"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
