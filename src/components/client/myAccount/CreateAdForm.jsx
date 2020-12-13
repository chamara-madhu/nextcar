import React, { useState } from "react";
import classnames from "classnames";
import axios from "axios";
import BasicDetails from "./ad-components/BasicDetails";
import PhotosUpload from "./ad-components/PhotosUpload";
import AdDesc from "./ad-components/AdDesc";
import Features from "./ad-components/Features";
import Price from "./ad-components/Price";
import Location from "./ad-components/Location";
import ContactDetails from "./ad-components/ContactDetails";

function CreateAdForm() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [yearOfReg, setYearOfReg] = useState("");
  const [mileage, setMileage] = useState("");
  const [engine, setEngine] = useState("");
  const [condition, setCondition] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [color, setColor] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [images, setImages] = useState({});
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [priceCheckbox, setPriceCheckbox] = useState(false);
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  const [makeErr, setMakeErr] = useState("");
  const [modeErr, setModeErr] = useState("");
  const [yearOfRegErr, setYearOfRegErr] = useState("");
  const [engineErr, setEngineErr] = useState("");
  const [mileageErr, setMileageErr] = useState("");
  const [conditionErr, setConditionErr] = useState("");
  const [bodyTypeErr, setBodyTypeErr] = useState("");
  const [transmissionErr, setTransmissionErr] = useState("");
  const [fuelTypeErr, setFuelTypeErr] = useState("");
  const [colorErr, setColorErr] = useState("");
  const [featureErr, setFeatureErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [districtErr, setDistrictErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChangeFile = (e) => {
    console.log(e.target.files[0]);
    setImages(e.target.files[0]);

    console.log(images);
  };

  // get checkbox value
  const handleChangeCheckBox = (e) => {
    if (e.target.checked) {
      setPriceCheckbox(true);
      setPrice("");
      setPriceErr("");
    } else {
      setPriceCheckbox(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "make") {
      setMake(e.target.value);
      setMakeErr("");
    } else if (e.target.name === "model") {
      setModel(e.target.value);
      setModeErr("");
    } else if (e.target.name === "yearOfReg") {
      setYearOfReg(e.target.value);
      setYearOfRegErr("");
    } else if (e.target.name === "mileage") {
      setMileage(e.target.value);
      setMileageErr("");
    } else if (e.target.name === "engine") {
      setEngine(e.target.value);
      setEngineErr("");
    } else if (e.target.name === "condition") {
      setCondition(e.target.value);
      setConditionErr("");
    } else if (e.target.name === "bodyType") {
      setBodyType(e.target.value);
      setBodyTypeErr("");
    } else if (e.target.name === "transmission") {
      setTransmission(e.target.value);
      setTransmissionErr("");
    } else if (e.target.name === "fuelType") {
      setFuelType(e.target.value);
      setFuelTypeErr("");
    } else if (e.target.name === "color") {
      setColor(e.target.value);
      setColorErr("");
    } else if (e.target.name === "adDescription") {
      setAdDescription(e.target.value);
    } else if (e.target.name === "district") {
      setDistrict(e.target.value);
      setDistrictErr("");
    } else if (e.target.name === "feature") {
      setFeature(e.target.value);
      setFeatureErr("");
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
      setPriceErr("");
      setPriceCheckbox(false);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
      setCityErr("");
    } else if (e.target.name === "name") {
      setName(e.target.value);
      setNameErr("");
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
      setPhoneErr("");
    }
  };

  const validateAddFeature = () => {
    let featureErr = "";

    if (!feature) {
      featureErr = "Feature is required";
    }

    if (featureErr) {
      setFeatureErr(featureErr);
      return false;
    }

    return true;
  };

  const AddFeature = (e) => {
    e.preventDefault();
    if (validateAddFeature()) {
      setFeatures((features) => [...features, feature]);
      setFeature("");
    }
  };

  const deleteFeature = (id) => {
    const filteredEl = features.filter((el, i) => i !== id);

    setFeatures(filteredEl);
  };

  const validateAddPhone = () => {
    let phoneErr = "";

    if (!phone) {
      phoneErr = "Contact number is required";
    } else if (phone.length !== 9) {
      phoneErr = "Contact number length must be 9";
    }

    if (phoneErr) {
      setPhoneErr(phoneErr);
      return false;
    }

    return true;
  };

  const AddPhone = (e) => {
    e.preventDefault();
    if (validateAddPhone()) {
      setPhoneNumbers((phoneNumbers) => [...phoneNumbers, "+94" + phone]);
      setPhone("");
    }
  };

  const deletePhone = (id) => {
    const filteredEl = phoneNumbers.filter((el, i) => i !== id);

    setPhoneNumbers(filteredEl);
  };

  // validate
  const validate = () => {
    let makeErr = "";
    let modeErr = "";
    let yearOfRegErr = "";
    let mileageErr = "";
    let engineErr = "";
    let conditionErr = "";
    let bodyTypeErr = "";
    let transmissionErr = "";
    let fuelTypeErr = "";
    let colorErr = "";
    let districtErr = "";
    let priceErr = "";
    let cityErr = "";
    let nameErr = "";
    let phoneErr = "";

    if (!make) {
      makeErr = "Make is required";
    }

    if (!model) {
      modeErr = "Model is required";
    }

    if (!yearOfReg) {
      yearOfRegErr = "Year of registration is required";
    } else if (yearOfReg < 1) {
      yearOfRegErr = "Invalid year";
    } else if (yearOfReg.length !== 4) {
      yearOfRegErr = "Invalid year";
    }

    if (!mileage) {
      mileageErr = "Mileage is required";
    } else if (mileage < 1) {
      mileageErr = "Invalid mileage";
    }

    if (!engine) {
      engineErr = "Engine is required";
    } else if (engine < 1) {
      engineErr = "Invalid engine capacity";
    }

    if (!condition) {
      conditionErr = "Condition is required";
    }

    if (!bodyType) {
      bodyTypeErr = "Body type is required";
    }

    if (!transmission) {
      transmissionErr = "Transmission is required";
    }

    if (!fuelType) {
      fuelTypeErr = "Fuel type is required";
    }

    if (!color) {
      colorErr = "Color is required";
    }

    if (!price) {
      priceErr = "Price is required";
    }

    if (!district) {
      districtErr = "District is required";
    }

    if (!city) {
      cityErr = "City is required";
    }

    if (!name) {
      nameErr = "Contact name is required";
    }
    if (phoneNumbers.length < 1) {
      phoneErr = "At least one contact number is required";
    }

    if (
      makeErr ||
      modeErr ||
      yearOfRegErr ||
      mileageErr ||
      engineErr ||
      conditionErr ||
      bodyTypeErr ||
      transmissionErr ||
      fuelTypeErr ||
      colorErr ||
      priceErr ||
      districtErr ||
      cityErr ||
      nameErr ||
      phoneErr
    ) {
      setMakeErr(makeErr);
      setModeErr(modeErr);
      setYearOfRegErr(yearOfRegErr);
      setMileageErr(mileageErr);
      setEngineErr(engineErr);
      setConditionErr(conditionErr);
      setBodyTypeErr(bodyTypeErr);
      setTransmissionErr(transmissionErr);
      setFuelTypeErr(fuelTypeErr);
      setColorErr(colorErr);
      setPriceErr(priceErr);
      setDistrictErr(districtErr);
      setCityErr(cityErr);
      setNameErr(nameErr);
      setPhoneErr(phoneErr);

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      // create product object
      var bodyFormData = new FormData();
      bodyFormData.set("make", make);
      bodyFormData.set("model", model);
      bodyFormData.set("yearOfReg", yearOfReg);
      bodyFormData.set("mileage", mileage);
      bodyFormData.set("engine", engine);
      bodyFormData.set("condition", condition);
      bodyFormData.set("bodyType", bodyType);
      bodyFormData.set("transmission", transmission);
      bodyFormData.set("fuelType", fuelType);
      bodyFormData.set("color", color);
      bodyFormData.set("adDescription", adDescription);
      bodyFormData.set("features", features);
      bodyFormData.set("price", price);
      bodyFormData.set("isPriceNegotiable", priceCheckbox);
      bodyFormData.set("district", district);
      bodyFormData.set("city", city);
      bodyFormData.set("name", name);

      // bodyFormData.set("status", this.state.status);
      // bodyFormData.append("imageFront", this.state.imageFront);

      console.log(bodyFormData);

      // axios({
      //   method: "post",
      //   url: `/api/product/${isAuthenticated().user._id}`,
      //   data: bodyFormData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     Authorization: `Bearer ${isAuthenticated().token}`
      //   }
      // })
      //   .then(result => {
      //     if (result) {
      //       // clear form
      //       this.setState(initialState);

      //       // reset image value
      //       document.getElementById("imageFront").value = "";
      //       document.getElementById("imageJacket").value = "";
      //       document.getElementById("imageBorder").value = "";
      //       document.getElementById("imageBack").value = "";

      //       // set alert message
      //       this.setState({ success: true, loading: false });
      //     }
      //   })
      //   .catch(err => {
      //     this.setState({ errors: err.response.data, loading: false });

      //     document.getElementById("name-label").focus();
      //   });
    }
  };

  return (
    <div className="row m-0">
      <div className="col p-4">
        <form noValidate>
          <BasicDetails
            make={make}
            model={model}
            yearOfReg={yearOfReg}
            mileage={mileage}
            engine={engine}
            condition={condition}
            bodyType={bodyType}
            transmission={transmission}
            fuelType={fuelType}
            color={color}
            makeErr={makeErr}
            modeErr={modeErr}
            yearOfRegErr={yearOfRegErr}
            engineErr={engineErr}
            mileageErr={mileageErr}
            conditionErr={conditionErr}
            bodyTypeErr={bodyTypeErr}
            transmissionErr={transmissionErr}
            fuelTypeErr={fuelTypeErr}
            colorErr={colorErr}
            priceErr={priceErr}
            handleChange={handleChange}
          />

          <PhotosUpload images={images} setImages={setImages} />
          <AdDesc adDescription={adDescription} handleChange={handleChange} />
          <Features
            feature={feature}
            features={features}
            featureErr={featureErr}
            handleChange={handleChange}
            AddFeature={AddFeature}
            deleteFeature={deleteFeature}
          />
          <Price
            price={price}
            priceCheckbox={priceCheckbox}
            priceErr={priceErr}
            handleChange={handleChange}
            handleChangeCheckBox={handleChangeCheckBox}
          />
          <Location
            district={district}
            city={city}
            districtErr={districtErr}
            cityErr={cityErr}
            handleChange={handleChange}
          />
          <ContactDetails
            name={name}
            phone={phone}
            phoneErr={phoneErr}
            phoneNumbers={phoneNumbers}
            nameErr={nameErr}
            loading={loading}
            handleChange={handleChange}
            AddPhone={AddPhone}
            deletePhone={deletePhone}
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAdForm;
