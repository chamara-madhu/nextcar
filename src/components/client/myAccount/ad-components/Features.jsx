import React from "react";
import classnames from "classnames";

function Features(props) {
  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">Features</p>
          <p className="info-desc">
            Add any amount of features. Not mandatory but recommended.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="form-row">
          <div className="input-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="feature">Feature (Optional)</label>
            <div class="input-group">
              <input
                type="text"
                className={classnames("form-control", {
                  "is-invalid": props.featureErr,
                })}
                name="feature"
                onChange={props.handleChange}
                value={props.feature}
                placeholder="e.g: Full option"
                aria-label="feature"
                aria-describedby="button-addon2"
                autoComplete="off"
              />
              <div class="input-group-append">
                <button
                  type="submit"
                  className="btn btn-submit"
                  onClick={props.AddFeature}
                >
                  Add
                </button>
              </div>
              <div className="invalid-feedback">{props.featureErr}</div>
            </div>
          </div>
        </div>

        <ul className="features-list">
          {props.features.map((el, i) => (
            <li key={i}>
              {el}
              <i
                className="fas fa-trash-alt ml-3"
                onClick={() => props.deleteFeature(i)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;
