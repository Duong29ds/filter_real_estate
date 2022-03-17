import provinces from "../../../data/provinces";

import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useDispatch } from "react-redux";

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

const provinceArray = Object.values(provinces);

export default function SelectProvince() {
  const dispatch = useDispatch();
  const [provinceName, setProvinceName] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProvinceName(value);
    const province = provinceArray.find((province) => province.name === value);
    dispatch({ type: "setProvince", newProvince: province });
  };

  return (
    <div>
      <h4 className="header">Tỉnh thành</h4>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">-City-</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={provinceName}
          onChange={handleChange}
          MenuProps={MenuProps}
          input={<OutlinedInput label="Name" />}
        >
          {provinceArray.map((province) => (
            <MenuItem key={province.name} value={province.name}>
              {province.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
