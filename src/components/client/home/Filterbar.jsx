import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import "../../../styles/filter.css";

const Filterbar = (props) => {
  const [make, setMake] = useState([
    { id: 1, name: "Audi" },
    { id: 2, name: "Benz" },
    { id: 3, name: "BMW" },
    { id: 4, name: "Nisan" },
    { id: 5, name: "Toyota" },
  ]);
  const [modal, setModal] = useState([
    { id: 1, name: "Aqua" },
    { id: 2, name: "Axio" },
    { id: 3, name: "Allion" },
    { id: 4, name: "Premio" },
  ]);
  const [condition, setCondition] = useState([
    { id: 1, name: "Antique" },
    { id: 2, name: "Brand New" },
    { id: 3, name: "Registered (Used)" },
    { id: 4, name: "Unregistered" },
  ]);
  const [price, setPrice] = useState([
    { id: { min: 0, max: 1000000 }, name: "Below 1Mn" },
    { id: { min: 1000001, max: 2000000 }, name: "1Mn - 2Mn" },
    { id: { min: 2000001, max: 3500000 }, name: "2Mn - 3.5Mn" },
    { id: { min: 3500001, max: 5000000 }, name: "3.5Mn - 5Mn" },
    { id: { min: 5000001, max: 7500000 }, name: "5Mn - 7.5Mn" },
    { id: { min: 7500001, max: 10000000 }, name: "7.5Mn - 10Mn" },
    { id: { min: 10000001, max: 15000000 }, name: "10Mn - 150Mn" },
    { id: { min: 15000001, max: 20000000 }, name: "150Mn - 200Mn" },
    { id: { min: 20000001, max: 30000000 }, name: "200Mn - 300Mn" },
    { id: { min: 30000001, max: 4000000 }, name: "300Mn - 400Mn" },
    { id: { min: 40000001, max: 5000000 }, name: "400Mn - 500Mn" },
    { id: { min: 50000001, max: 10000000 }, name: "500Mn - 1000Mn" },
  ]);
  const [location, setLocation] = useState([
    { id: 1, name: "Colombo" },
    { id: 2, name: "Gampaha" },
    { id: 3, name: "Kalutara" },
    { id: 4, name: "Galle" },
    { id: 5, name: "Matara" },
    { id: 6, name: "Jafna" },
  ]);
  const [mileage, setMileage] = useState([
    { id: 1, name: "Below 5000" },
    { id: 2, name: "5001 - 10000" },
    { id: 3, name: "10001 - 20000" },
    { id: 4, name: "20001 - 35000" },
    { id: 5, name: "35001 - 50000" },
    { id: 6, name: "50001 - 75000" },
    { id: 7, name: "75001 - 100000" },
    { id: 8, name: "100001 - 150000" },
    { id: 9, name: "150001 - 200000" },
    { id: 10, name: "Above 200001" },
  ]);
  const [transmission, setTransmission] = useState([
    { id: 1, name: "Manual" },
    { id: 2, name: "Automatic" },
    { id: 3, name: "Tiptronic" },
    { id: 4, name: "Other Transmission" },
  ]);
  const [capacity, setCapacity] = useState([
    { id: 1, name: "Below 1000 cc" },
    { id: 2, name: "1001 - 1500" },
    { id: 3, name: "1501 - 2000" },
    { id: 4, name: "2001 - 2500" },
    { id: 5, name: "2501 - 3000" },
    { id: 6, name: "Above 3001" },
  ]);
  const [fuel, setFuel] = useState([
    { id: 1, name: "Petrol" },
    { id: 2, name: "Diesel" },
    { id: 3, name: "Hybrid" },
    { id: 4, name: "Electric" },
  ]);

  return (
    <React.Fragment>
      <div className="fixed-div">
        <div
          className={props.makeAcco ? "accordion active" : "accordion"}
          // onClick={() => props.handleAccordian("makeAcco")}
        >
          Make
          {1 && (
            <span
              className="accor-reset"
              // onClick={() => this.props.handleClearFilters("minEdu")}
            >
              Reset
            </span>
          )}
        </div>
        {!props.makeAcco ? (
          <div className="panel">
            <List component="nav" aria-label="secondary mailbox folders">
              <RadioGroup
                className="filter-radio"
                aria-label="make"
                name="make"
                value={parseInt(props.make)}
                onChange={props.handleChange}
              >
                {make.map((make, i) => (
                  <FormControlLabel
                    key={make.id}
                    value={make.id}
                    control={<Radio size="small" />}
                    label={make.name}
                    className={make.id == props.make ? "weight-bold" : ""}
                  />
                ))}
              </RadioGroup>
            </List>
          </div>
        ) : null}
        {/* <div
          className={props.modalAcco ? "accordion active" : "accordion"}
          // onClick={() => props.handleAccordian("modalAcco")}
        >
          Modal
          {1 && (
            <span
              className="accor-reset"
              // onClick={() => this.props.handleClearFilters("minEdu")}
            >
              Reset
            </span>
          )}
        </div>
        {props.modalAcco ? (
          <div className="panel">
            <List component="nav" aria-label="secondary mailbox folders">
              <RadioGroup
                className="filter-radio"
                aria-label="make"
                name="make"
                value={parseInt(props.make)}
                onChange={props.handleChange}
              >
                {make.map((make, i) => (
                  <FormControlLabel
                    key={make.id}
                    value={make.id}
                    control={<Radio size="small" />}
                    label={make.name}
                    className={make.id == props.make ? "weight-bold" : ""}
                  />
                ))}
              </RadioGroup>
            </List>
          </div>
        ) : null}

        <div
          className={props.priceAcco ? "accordion active" : "accordion"}
          // onClick={() => props.handleAccordian("priceAcco")}
        >
          Price
          {1 && (
            <span
              className="accor-reset"
              // onClick={() => this.props.handleClearFilters("minEdu")}
            >
              Reset
            </span>
          )}
        </div>
        {props.priceAcco ? (
          <div className="panel">
            <List component="nav" aria-label="secondary mailbox folders">
              <RadioGroup
                className="filter-radio"
                aria-label="price"
                name="price"
                value={props.price}
                onChange={props.handleChange}
              >
                {price.map((price, i) => (
                  <FormControlLabel
                    key={i}
                    value={JSON.stringify(price.id)}
                    control={<Radio size="small" />}
                    label={price.name}
                    className={
                      JSON.stringify(price.id) == props.price
                        ? "weight-bold"
                        : ""
                    }
                  />
                ))}
              </RadioGroup>
            </List>
          </div>
        ) : null}

        <div
          className={props.conditionAcco ? "accordion active" : "accordion"}
          // onClick={() => props.handleAccordian("conditionAcco")}
        >
          condition
          {props.checkedConditions.length > 0 && (
            <span
              className="accor-reset"
              // onClick={() => props.handleClearFilters("ethnicity")}
            >
              Reset
            </span>
          )}
        </div>
        {props.conditionAcco ? (
          <div className="panel">
            <List className="filter-list">
              {condition.map((el) => {
                const labelId = `${el.id}`;

                return (
                  <ListItem
                    key={el.id}
                    role={undefined}
                    dense
                    button
                    onClick={() =>
                      props.handleCheckboxes(el.id, "checkedConditions")
                    }
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={props.checkedConditions.indexOf(el.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={el.name}
                      className={
                        props.checkedConditions.indexOf(el.id) !== -1
                          ? "weight-bold"
                          : ""
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        ) : null}

        <div
          className={props.locationAcco ? "accordion active" : "accordion"}
          // onClick={() => props.handleAccordian("locationAcco")}
        >
          Location
          {props.checkedLocation.length > 0 && (
            <span
              className="accor-reset"
              // onClick={() => props.handleClearFilters("ethnicity")}
            >
              Reset
            </span>
          )}
        </div>
        {props.locationAcco ? (
          <div className="panel">
            <List className="filter-list">
              {location.map((el) => {
                const labelId = `${el.id}`;

                return (
                  <ListItem
                    key={el.id}
                    role={undefined}
                    dense
                    button
                    onClick={() =>
                      props.handleCheckboxes(el.id, "checkedLocation")
                    }
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={props.checkedLocation.indexOf(el.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={el.name}
                      className={
                        props.checkedLocation.indexOf(el.id) !== -1
                          ? "weight-bold"
                          : ""
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        ) : null}

        <div
          className={props.fuelAcco ? "accordion active" : "accordion"}
          // onClick={() => props.handleAccordian("fuelAcco")}
        >
          Fuel Type
          {props.checkedFuel.length > 0 && (
            <span
              className="accor-reset"
              // onClick={() => props.handleClearFilters("ethnicity")}
            >
              Reset
            </span>
          )}
        </div>
        {props.fuelAcco ? (
          <div className="panel">
            <List className="filter-list">
              {fuel.map((el) => {
                const labelId = `${el.id}`;

                return (
                  <ListItem
                    key={el.id}
                    role={undefined}
                    dense
                    button
                    onClick={() => props.handleCheckboxes(el.id, "checkedFuel")}
                  >
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        edge="start"
                        checked={props.checkedFuel.indexOf(el.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={el.name}
                      className={
                        props.checkedFuel.indexOf(el.id) !== -1
                          ? "weight-bold"
                          : ""
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>
        ) : null}*/}
      </div>
    </React.Fragment>
  );
};

export default Filterbar;
