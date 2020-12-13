import React, { useState } from "react";
import axios from "axios";
import MultiImageInput from "react-multiple-image-input";

function PhotosUpload(props) {
  const crop = {
    unit: "%",
    aspect: 16 / 12,
    width: "100",
  };

  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">
            Photos <span className="required-tag">*</span>
          </p>
          <p className="info-desc">
            Minimum 1 and maximum 5 photos are allowed.
          </p>
        </div>
      </div>
      <div className="content">
        <MultiImageInput
          max={5}
          theme="light"
          images={props.images}
          setImages={props.setImages}
          cropConfig={{ crop, ruleOfThirds: true }}
        />
      </div>
    </div>
  );
}

export default PhotosUpload;
