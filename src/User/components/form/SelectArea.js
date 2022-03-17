import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 100,
//     },
//   },
// };

const areas = [
  [0, 20],
  [20, 30],
  [30, 50],
  [50, 60],
  [60, 70],
  [70, 80],
];

export default function SelectArea() {
  const dispatch = useDispatch();
  const [area, setArea] = React.useState(``);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setArea(value);
    dispatch({ type: "setArea", area: value });
  };

  return (
    <div>
      <h4 className="header">Diện tích</h4>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">-Area-</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          defaultValue={area}
          value={area}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {areas.map((area) => (
            <MenuItem key={area} value={area}>
              {`${area[0] === 0 ? "Dưới" : `${area[0]} m2-`}  ${area[1]} m2`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
