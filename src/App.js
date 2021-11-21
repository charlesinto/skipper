import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import ProductView, { AddToCart, Row } from "./components/ProductView";
import Fade from "react-reveal/Fade";
import mouse from "./assets/mouse3.png";
import headphone from "./assets/headphone2.png";
import video from "./assets/video.mp4";
import profile from "./assets/userprofile.jpeg";
import Bounce from "react-reveal/Bounce";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const callBackInView = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setActiveLink("description");
    } else {
      setActiveLink("spec");
    }
  };

  const [activeLink, setActiveLink] = useState("spec");

  const containerRef = useRef(null);
  const specsRef = useRef(null);
  const [onReview, setOnReview] = useState(false);
  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "600px",
      threshold: 1.0,
    }),
    []
  );
  // const options = {
  //   root: null,
  //   rootMargin: "800px",
  //   threshold: 1.0,
  // };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => callBackInView(entries, "description"),
      options
    );

    const ref = containerRef?.current;

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [containerRef, options]);

  const rootRef = useRef(null);
  return (
    <div className="container">
      <NavBar />
      <ProductView />
      <div ref={rootRef} className="row button-actions pb-3  mb-5">
        <div className="col-md-7 col-sm-12">
          <div className=" d-flex row-actions ">
            <div className="mx-3">
              <button
                onClick={() => {
                  setOnReview(false);
                  setActiveLink("spec");
                }}
                className={`c-btn ${
                  !onReview && activeLink === "spec"
                    ? "active text-skyblue"
                    : ""
                } reduced-padding bg-grey b-grey`}
              >
                Specification
              </button>
            </div>
            <div className="mx-3">
              <button
                onClick={() => {
                  setOnReview(false);
                  setActiveLink("description");
                }}
                className={`c-btn ${
                  !onReview && activeLink === "description"
                    ? "active text-skyblue"
                    : ""
                } reduced-padding bg-grey b-grey`}
              >
                Description
              </button>
            </div>
            <div className="mx-3">
              <button
                onClick={() => {
                  window.scrollTo(800, 800);
                  setOnReview(true);
                }}
                className={`c-btn ${
                  onReview ? "active text-skyblue" : ""
                } reduced-padding bg-grey b-grey`}
              >
                Reviews(158)
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-4">
          <AddToCart />
        </div>
      </div>

      {!onReview ? (
        <>
          <div ref={specsRef}>
            <ProductSpecsDescription />
          </div>
          <div className="py-4"></div>
          <div ref={containerRef}>
            <AboutUs />
          </div>
        </>
      ) : (
        <Review />
      )}
    </div>
  );
}

const Review = () => {
  return (
    <div className=" border-blue bg-navy border-rounded py-4 px-5">
      <Fade bottom>
        <div className="row mb-3">
          <div className="col-md-12">
            <h4 className="title text-skyblue">Reviews</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6  col-sm-12">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border-blue bg-navy border-rounded py-4 px-5">
                  <h4 className="text-skyblue">Overall Rating</h4>
                  <h4
                    className="text-white py-3"
                    style={{ fontWeight: "bolder" }}
                  >
                    4.5 / 5
                  </h4>
                  <div className="py-3">
                    <div className="rating mb-2">
                      <i className="ion ion-md-star-outline"></i>
                      <i className="ion ion-md-star-outline"></i>
                      <i className="ion ion-md-star-outline"></i>
                      <i className="ion ion-md-star-outline"></i>
                      <i className="ion ion-md-star-outline not-rated"></i>
                    </div>
                    <h4 className="text-white">158</h4>
                    <h4 className="text-white">Reviews</h4>
                  </div>
                  <div className="py-4"></div>
                  <div className="">
                    <h5 className="text-skyblue">Rating Breakdown</h5>
                  </div>
                  <div className="py-4"></div>
                  <Bounce left>
                    <ProgressBar value="80%" starNumber="5" votingCount="158" />
                  </Bounce>
                  <Bounce left>
                    <ProgressBar value="20%" starNumber="4" votingCount="320" />
                  </Bounce>
                  <Bounce left>
                    <ProgressBar value="90%" starNumber="3" votingCount="800" />
                  </Bounce>
                  <Bounce left>
                    <ProgressBar value="40%" starNumber="2" votingCount="400" />
                  </Bounce>
                  <Bounce left>
                    <ProgressBar value="30%" starNumber="1" votingCount="80" />
                  </Bounce>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="border-blue bg-navy border-rounded py-4 px-5">
                  <h4 className="text-skyblue">By Feature</h4>

                  <div className="py-4"></div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Battery Life</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Battery Life</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Usage</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Quality</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Energy</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Durability</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Awesomeness</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Hi-Tech</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-6">
                      <span className="text-white">Gaming</span>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="rating d-flex">
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline"></i>
                        </Fade>
                        <Fade left>
                          <i className="ion ion-md-star-outline not-rated"></i>
                        </Fade>
                        <span style={{ color: "#fff", paddingLeft: 8 }}>
                          Satifactory
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <h5 style={{ cursor: "pointer" }} className="text-white">
                        See More
                        <span className="text-white px-3">
                          <i className="ion ion-ios-arrow-down"></i>
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
            <Fade bottom>
              <UserReview />
            </Fade>
          </div>
        </div>
      </Fade>
      <div className="row py-5">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <button className={`c-btn reduced-padding bg-grey b-grey`}>
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ starNumber, value, votingCount }) => {
  return (
    <div className="d-flex mb-4">
      <div style={{ marginRight: 8 }} className="rating">
        <span style={{ marginRight: 4 }} className="text-white">
          {starNumber}
        </span>
        <i className="ion ion-md-star-outline"></i>
      </div>
      <div style={{ flex: 1, display: "flex" }} className="progress-bar">
        <div style={{ width: value }} className="progress"></div>
      </div>
      <div style={{ paddingLeft: 16 }} className="">
        <span className="text-white">{votingCount}</span>
      </div>
    </div>
  );
};

const UserReview = () => {
  return (
    <div className="row mb-4">
      <div className="col-md-2 col-sm-4">
        <img src={profile} className="user-profile" alt="profile" />
      </div>
      <div className="col-md-10 col-sm-8">
        <h3 style={{ fontWeight: "bold" }} className="text-white">
          Charles Onuorah
        </h3>
        <p style={{ color: "#fff" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English
        </p>
        <p>
          <div className="rating">
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline"></i>
            <i className="ion ion-md-star-outline not-rated"></i>
            <span style={{ color: "#fff" }}>Satifactory</span>
          </div>
        </p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="border-blue bg-navy border-rounded py-4 px-5">
      <div className="row mb-3">
        <div className="col-md-12">
          <h4 className="title text-skyblue">Description</h4>
        </div>
      </div>
      <Fade bottom>
        <div className="row">
          <div className="col-md-12">
            <VideoPromotion />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 product-desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

const VideoPromotion = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlay] = useState(false);
  const playPauseVideo = () => {
    console.log(videoRef);
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlay(true);
    } else {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };
  return (
    <div className="row mb-5 pt-2">
      <div className="col-md-2 col-sm-12"></div>
      <div className="col-md-8 col-sm-12">
        <div
          className="border-radius video-player"
          style={{ height: 350, position: "relative" }}
        >
          <video
            className="w-100 h-100"
            src={video}
            style={{ objectFit: "cover", borderRadius: 16 }}
            ref={videoRef}
          />
          <div
            onClick={playPauseVideo}
            className={`play-button ${isPlaying ? "hide" : "ripple show"}`}
          >
            <div>
              {isPlaying ? (
                <i className="ion ion-ios-pause"></i>
              ) : (
                <i className="ion ion-ios-play"></i>
              )}
            </div>

            {/* <div className="ripple one"></div> */}
          </div>
        </div>
      </div>
      <div className="col-md-2 col-sm-12"></div>
    </div>
  );
};

const ProductSpecsDescription = () => {
  return (
    <Fade bottom>
      <div className="row">
        <div className="col-md-7 mt-3 col-sm-12">
          <div className="border-blue bg-navy border-rounded py-4 px-5">
            <div className="row mb-3">
              <div className="col-md-12">
                <h4 className="title text-skyblue">Specification</h4>
              </div>
            </div>
            <Fade bottom>
              <Row tag="Keys" value="9 Keys" />
            </Fade>
            <Fade bottom>
              <Row tag="Connection Type" value="Wired" />
            </Fade>
            <Fade bottom>
              <Row tag="Other" value="" />
            </Fade>
            <Fade bottom>
              <Row tag="Resoluton" value="100~8,000" />
            </Fade>
            <Fade bottom>
              <Row tag="Acceleration" value="25 g" />
            </Fade>
            <Fade bottom>
              <Row tag="Color Option" value="" />
            </Fade>
            <Fade bottom>
              <Row tag="Switch Lifecycle" value="Over 25 million Clicks" />
            </Fade>
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <h4 style={{ fontWeight: "bold" }} className="text-skyblue mb-3">
            Related Product
          </h4>
          <div className="border-blue mt-4 bg-navy border-rounded py-4 px-3">
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center py-2">
                  <Fade bottom>
                    <div>
                      <div
                        style={{ position: "relative" }}
                        className="d-flex mb-2 justify-content-center"
                      >
                        <img
                          className="product-medium"
                          src={mouse}
                          alt="mouse"
                        />
                        <div className="price-tag">
                          <h5
                            style={{
                              fontWeight: "bolder",
                              margin: 0,
                              color: "#6DFAFB",
                              textAlign: "center",
                            }}
                          >
                            $99
                          </h5>
                          <h6 className="line-through oldPrice text-skyblue">
                            $85
                          </h6>
                        </div>
                      </div>
                      <h2
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          textAlign: "center",
                        }}
                        className="text-skyblue"
                      >
                        LogiTech G3 Lightspeed Gaming Mouse
                      </h2>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="border-blue mt-4 bg-navy border-rounded py-4 px-3">
            <div className="row mb-3">
              <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center py-2">
                  <Fade bottom>
                    <div>
                      <div
                        style={{ position: "relative" }}
                        className="d-flex mb-2 justify-content-center"
                      >
                        <img
                          className="product-medium"
                          src={headphone}
                          alt="headphone"
                        />
                        <div className="price-tag">
                          <h5
                            style={{ fontWeight: "bolder" }}
                            className="text-skyblue"
                          >
                            $99
                          </h5>
                          <h6 className="line-through old-price text-white">
                            $85
                          </h6>
                        </div>
                      </div>
                      <h2
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          textAlign: "center",
                        }}
                        className="text-skyblue"
                      >
                        LogiTech G-Force HeadPhone
                      </h2>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default App;
