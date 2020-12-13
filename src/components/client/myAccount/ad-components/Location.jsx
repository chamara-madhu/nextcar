import React from "react";
import classnames from "classnames";

function Location(props) {
  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">Location</p>
          <p className="info-desc">Where is the car located at?</p>
        </div>
      </div>
      <div className="content">
        <div className="form-row">
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="district">
              District <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.districtErr,
              })}
              id="district"
              name="district"
              value={props.district}
              onChange={props.handleChange}
            >
              <option selected>-- Select --</option>
              <option value="1">Ampara</option>
              <option value="2">Anuradhapura</option>
              <option value="3">Badulla</option>
              <option value="4">Batticaloa</option>
              <option value="5">Colombo</option>
              <option value="6">Galle</option>
              <option value="7">Gampaha</option>
              <option value="8">Hambantota</option>
              <option value="9">Jaffna</option>
              <option value="10">Kalutara</option>
              <option value="11">Kandy</option>
              <option value="12">Kegalle</option>
              <option value="13">Kilinochchi</option>
              <option value="14">Kurunegala</option>
              <option value="15">Mannar</option>
              <option value="16">Matale</option>
              <option value="17">Matara</option>
              <option value="18">Moneragala</option>
              <option value="19">Mullaitivu</option>
              <option value="20">Nuwara Eliya</option>
              <option value="21">Polonnaruwa</option>
              <option value="22">Puttalam</option>
              <option value="23">Ratnapura</option>
              <option value="24">Trincomalee</option>
              <option value="25">Vavuniya</option>
            </select>
            <div className="invalid-feedback">{props.districtErr}</div>
          </div>
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="city">
              City <span className="required-tag">*</span>
            </label>
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": props.cityErr,
              })}
              name="city"
              value={props.city}
              onChange={props.handleChange}
            />
            <div className="invalid-feedback">{props.cityErr}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
