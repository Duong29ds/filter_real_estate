import districts from "../../../data/districts";

import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputLabel from "@mui/material/InputLabel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const districtTemp = Object.values(districts);

export default function SelectDistrict() {
  const dispatch = useDispatch();
  const [districtName, setDistrictName] = React.useState("");
  const province = useSelector((state) => state.filterReducer.province);

  const districtArray = districtTemp.filter(
    (district) => district.parent_code === province.code
  );
  districtArray.unshift({ name: "NULL" });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDistrictName(value);
    const district = districtArray.find((district) => district.name === value);
    dispatch({ type: "setDistrict", newDistrict: district });
  };

  return (
    <div>
      <h4 className="header">Quận huyện</h4>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-name-label">-District-</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={districtName}
          onChange={handleChange}
          MenuProps={MenuProps}
          input={<OutlinedInput label="Name" />}
        >
          {districtArray.map((district) => (
            <MenuItem key={district.name} value={district.name}>
              {district.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
