import React from "react";
import classnames from "classnames";

function Price(props) {
  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">Price</p>
          <p className="info-desc">You can set either price or negotiable</p>
        </div>
      </div>
      <div className="content">
        <div className="form-row">
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="district">
              Price <span className="required-tag">*</span>
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Rs.</div>
              </div>
              <input
                type="number"
                className={classnames("form-control", {
                  "is-invalid": props.priceErr,
                })}
                name="price"
                value={props.price}
                onChange={props.handleChange}
                disabled={props.priceCheckbox}
              />
              <div className="invalid-feedback">{props.priceErr}</div>
            </div>
            <div className="form-group form-check mt-2 mb-0 price-checkbox">
              <input
                type="checkbox"
                className="form-check-input bg-dark"
                id="priceCheckbox"
                name="priceCheckbox"
                value={props.priceCheckbox}
                onChange={props.handleChangeCheckBox}
                disabled={props.price ? true : false}
              />
              <label className="form-check-label" htmlFor="priceCheckbox">
                Negotiable
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
