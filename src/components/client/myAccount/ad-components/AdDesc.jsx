import React from "react";
import axios from "axios";

function AdDesc(props) {
  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">Ad Description</p>
          <p className="info-desc">Not mandatory but recommended.</p>
        </div>
      </div>
      <div className="content">
        <div className="form-row">
          <div className="form-group col px-sm-2 mb-4">
            <label htmlFor="district">Ad Description (Optional)</label>
            <textarea
              className="form-control"
              name="adDescription"
              onChange={props.handleChange}
              value={props.adDescription}
              rows="5"
              placeholder="Optional"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdDesc;
