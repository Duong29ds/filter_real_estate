import React from "react";
import SelectProvince from "./SelectProvince";
import SelectDistrict from "./SelectDistrict";
import SelectPrice from "./SelectPrice";
import SelectArea from "./SelectArea";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

const styleButton = {
  height: "60%",
  margin: "8px",
  width: "100%",
  backgroundColor: "#F7CE68",
};

const Form = () => {
  const formInfo = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();
  const handleFilter = () => {
    dispatch({ type: "filterData", formInfo: formInfo });
  };
  console.log(formInfo);
  return (
    <div className="form">
      <SelectProvince />
      <SelectDistrict />
      <SelectPrice />
      <SelectArea />
      <Button variant="contained" sx={styleButton} onClick={handleFilter}>
        Lọc
      </Button>
    </div>
  );
};

export default Form;
