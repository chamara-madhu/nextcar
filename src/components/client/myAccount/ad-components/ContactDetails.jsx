import React from "react";
import classnames from "classnames";

function ContactDetails(props) {
  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">
            Contact Details <span className="required-tag">*</span>
          </p>
          <p className="info-desc">Can add multiple phone numbers.</p>
        </div>
      </div>
      <div className="content">
        <div className="form-row">
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="name">
              Contact Name <span className="required-tag">*</span>
            </label>
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": props.nameErr,
              })}
              name="name"
              value={props.name}
              onChange={props.handleChange}
            />
            <div className="invalid-feedback">{props.nameErr}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="phone">
              Contact Number/s <span className="required-tag">*</span>{" "}
            </label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">+94</span>
              </div>
              <input
                type="number"
                className={classnames("form-control", {
                  "is-invalid": props.phoneErr,
                })}
                name="phone"
                onChange={props.handleChange}
                value={props.phone}
                placeholder="7XXXXXXXX"
                aria-label="phone"
                aria-describedby="button-addon2"
                autoComplete="off"
              />
              <div class="input-group-append">
                <button
                  type="submit"
                  className="btn btn-submit"
                  onClick={props.AddPhone}
                >
                  Add
                </button>
              </div>
              <div className="invalid-feedback">{props.phoneErr}</div>
            </div>
          </div>
        </div>

        <ul className="features-list">
          {props.phoneNumbers.map((el, i) => (
            <li key={i}>
              {el}
              <i
                className="fas fa-trash-alt ml-3"
                onClick={() => props.deletePhone(i)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="submit"
        className="btn-submit mt-3"
        onClick={props.handleSubmit}
        style={{ width: 150, float: "right" }}
      >
        {props.loading ? (
          <div
            className="spinner-border spinner-border-sm text-light"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        {props.loading ? "" : "Post Ad"}
      </button>
    </div>
  );
}

export default ContactDetails;
