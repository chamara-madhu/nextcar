import React, { useState, useEffect } from "react";
import classnames from "classnames";
import axios from "axios";

function BasicDetails(props) {
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://riyalk.herokuapp.com/api/makemodel/getAllModel`)
      .then((res) => {
        // setLoading(false);

        setModels(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });

    axios
      .get(`https://riyalk.herokuapp.com/api/makemodel/getAll`)
      .then((res) => {
        // setLoading(false);

        setMakes(res.data);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="ad-form-sec">
      <div className="form-row header">
        <div className="form-group col px-sm-2 mb-0">
          <p className="heading mb-0">Basic Details </p>
          <p className="info-desc">All fields are mandatory.</p>
        </div>
      </div>

      <div className="content">
        <div className="form-row">
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="make">
              Make <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.makeErr,
              })}
              id="make"
              name="make"
              onChange={props.handleChange}
              value={props.make}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              {makes.map((el, i) => (
                <option value={el.id} key={i}>
                  {el.makeName}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{props.makeErr}</div>
          </div>

          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="model">
              Model <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.modeErr,
              })}
              id="model"
              name="model"
              onChange={props.handleChange}
              value={props.model}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              {models.map((el, i) => (
                <option value={el.id} key={i}>
                  {el.modelName}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{props.modeErr}</div>
          </div>

          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="yearOfReg">
              Year of Registration <span className="required-tag">*</span>
            </label>
            <input
              type="number"
              className={classnames("form-control", {
                "is-invalid": props.yearOfRegErr,
              })}
              id="yearOfReg"
              name="yearOfReg"
              onChange={props.handleChange}
              value={props.yearOfReg}
              placeholder="e.g. 2015"
              min="1"
            />
            <div className="invalid-feedback">{props.yearOfRegErr}</div>
          </div>

          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="mileage">
              Mileage (km) <span className="required-tag">*</span>
            </label>
            <input
              type="number"
              className={classnames("form-control", {
                "is-invalid": props.mileageErr,
              })}
              id="mileage"
              name="mileage"
              onChange={props.handleChange}
              value={props.mileage}
              placeholder="e.g. 50000"
              min="1"
            />
            <div className="invalid-feedback">{props.mileageErr}</div>
          </div>

          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="engine">
              Engine cc <span className="required-tag">*</span>
            </label>
            <input
              type="number"
              className={classnames("form-control", {
                "is-invalid": props.engineErr,
              })}
              id="engine"
              name="engine"
              onChange={props.handleChange}
              value={props.engine}
              placeholder="e.g. 1800"
              min="1"
            />
            <div className="invalid-feedback">{props.engineErr}</div>
          </div>
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="condition">
              Condition <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.conditionErr,
              })}
              id="condition"
              name="condition"
              onChange={props.handleChange}
              value={props.condition}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              <option value="1">Brand New</option>
              <option value="2">Reconditioned</option>
              <option value="3">Used</option>
              <option value="4">Other</option>
            </select>
            <div className="invalid-feedback">{props.conditionErr}</div>
          </div>
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="bodyType">
              Body type <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.bodyTypeErr,
              })}
              id="bodyType"
              name="bodyType"
              onChange={props.handleChange}
              value={props.bodyType}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              <option value="1">Saloon</option>
              <option value="2">Hatchback</option>
              <option value="3">Station wagon</option>
              <option value="4">Convertible</option>
              <option value="5">Coupe</option>
              <option value="6">SUV</option>
              <option value="7">MPV</option>
              <option value="8">Estate</option>
              <option value="9">4 x 4</option>
              <option value="10">Other</option>
            </select>
            <div className="invalid-feedback">{props.bodyTypeErr}</div>
          </div>
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="transmission">
              Transmission <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.transmissionErr,
              })}
              id="transmission"
              name="transmission"
              onChange={props.handleChange}
              value={props.transmission}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              <option value="1">Automatic</option>
              <option value="2">Manual</option>
              <option value="3">Tiptronic</option>
              <option value="4">Other</option>
            </select>
            <div className="invalid-feedback">{props.transmissionErr}</div>
          </div>
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="fuelType">
              Fuel Type <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.fuelTypeErr,
              })}
              id="fuelType"
              name="fuelType"
              onChange={props.handleChange}
              value={props.fuelType}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              <option value="1">Petrol</option>
              <option value="2">Diesel</option>
              <option value="3">Electronic</option>
              <option value="4">Hybrid</option>
              <option value="5">Gas</option>
              <option value="6">Other</option>
            </select>
            <div className="invalid-feedback">{props.fuelTypeErr}</div>
          </div>
          <div className="form-group col-md-6 px-sm-2 mb-4">
            <label htmlFor="color">
              Color <span className="required-tag">*</span>
            </label>
            <select
              className={classnames("form-control", {
                "is-invalid": props.colorErr,
              })}
              id="color"
              name="color"
              onChange={props.handleChange}
              value={props.color}
            >
              <option defaultValue hidden>
                -- Select --
              </option>
              <option value="1">Beige</option>
              <option value="2">Black</option>
              <option value="3">Blue</option>
              <option value="4">Bronze</option>
              <option value="5">Brown</option>
              <option value="6">Burgundy</option>
              <option value="7">Gold</option>
              <option value="8">Green</option>
              <option value="9">Grey</option>
              <option value="10">Indigo</option>
              <option value="11">Magenta</option>
              <option value="12">Maroon</option>
              <option value="13">Muti-Color</option>
              <option value="14">Navy</option>
              <option value="15">Orange</option>
              <option value="16">Pink</option>
              <option value="17">Purple</option>
              <option value="18">Red</option>
              <option value="19">Silver</option>
              <option value="20">Turquoise</option>
              <option value="21">White</option>
              <option value="22">Yellow</option>
              <option value="23">Other</option>
            </select>
            <div className="invalid-feedback">{props.colorErr}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
