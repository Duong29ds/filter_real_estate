import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const prices = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 5],
  [5, 7],
  [7, 10],
];

export default function SelectPrice() {
  const dispatch = useDispatch();
  const [price, setPrice] = React.useState(``);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPrice(value);
    dispatch({ type: "setPrice", price: value });
  };

  return (
    <div>
      <h4 className="header">Khoảng giá</h4>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">-Price-</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={price}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {prices.map((price) => (
            <MenuItem key={price} value={price}>
              {`${price[0] === 0 ? "Dưới" : `Từ ${price[0]} triệu đến`}  ${
                price[1]
              } triệu`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
