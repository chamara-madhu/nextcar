import React, { Component } from "react";
import { Link } from "react-router-dom";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256484.jpg",
    thumbnail: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256484.jpg",
  },
  {
    original: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256481.jpg",
    thumbnail: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256481.jpg",
  },
  {
    original: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256482.jpg",
    thumbnail: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256482.jpg",
  },
  {
    original: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256482.jpg",
    thumbnail: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256482.jpg",
  },
  {
    original: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256485.jpg",
    thumbnail: "https://riyasewana.com/uploads/jaguar-xf3-0-v6-281256485.jpg",
  },
];

export default class Detail extends Component {
  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, { photo, index }) => {
    this.setState({ currentImage: index, viewerIsOpen: true });
  };

  closeLightbox = () => {
    this.setState({ currentImage: 0, viewerIsOpen: false });
  };

  render() {
    return (
      <div className="cus-con-detail">
        <div className="row m-3">
          <div className="img-col p-0">
            <Link to="/" className="back-link">
              <i class="fas fa-angle-left"></i> Back
            </Link>
            <ImageGallery items={images} showIndex={true} />
            <p className="heading">DETAILS</p>
            <div className="row m-0 bg-white  p-0 vehicle-features">
              <div className="col-sm-6 p-0">
                <p>
                  <span>Make:</span> Jaguar
                </p>
                <p>
                  <span>Modal:</span> XF3.0 V6
                </p>
                <p>
                  <span>Year:</span> 2012
                </p>
                <p>
                  <span>Mileage (km):</span> 55810
                </p>
              </div>
              <div className="col-sm-6 p-0">
                <p>
                  <span>Engine Capacity (cc):</span> 2200
                </p>
                <p>
                  <span>Condition:</span> Used
                </p>
                <p>
                  <span>Gear Type:</span> Automatic
                </p>
                <p>
                  <span>Fuel Type:</span> Petrol
                </p>
              </div>
            </div>
          </div>
          <div className="content-col">
            <p className="location">
              {" "}
              <i class="fas fa-map-marker-alt mr-1"></i> Rajagiriya, Colombo
            </p>
            <p className="publish-on">1 day ago</p>
            <p className="name">Jaguar XF3.0 V6 (2012) 2200cc</p>
            <p className="desc">
              Carefully used and well maintained by a Professor, as the second
              car. Always garaged, no accidents. Single use. Showroom condition.
              Factory fitted privacy glasses & rear retractable screen. Walnut
              interior, Napa leather seats, original sound system. Dual control
              climatic control A/C. Imported brand new, through Jaguar agents
              and maintained by agents. New tyres fitted and nano-ceramic
              coating (water & dust proof - no waxing needed) done recently.
              Very fast 3000 cc Supercharged engine taking 5.4 s to reach
              100kmph. Fully Automatic or paddle shift (sport mode) options.
              Genuine low mileage - 55800 km. Used mainly during weekend and
              long distant travel. Very economical for its size & comfort.
              Nearly 18 km/L (5.6 L per 100km) on express way and around 8-10
              km/L in mixed driving in Kandy.
            </p>
            <p className="price">Rs. 9,000,000</p>
            <p className="phone">
              <a href="tel:+94 710 193 314">+94 710 193 314</a>
            </p>
          </div>
        </div>
        {/* <div className="row mx-3 mt-4">
          <div className="img-col p-0">
           
          </div>
          <div className="content-col"></div>
        </div> */}
      </div>
    );
  }
}
