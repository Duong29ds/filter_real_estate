import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { filterProvince, filterDistrict } from "./Filter";

const styleCard = {
  maxWidth: "50%",
  display: "grid",
  margin: "10px 30px",
  gridTemplateColumns: "2fr 4fr",
};

const Item = (props) => {
  const price = props.price / 1000000;
  const { path_with_type: localName } = filterDistrict(props.districtCode);
  return (
    <Card sx={styleCard}>
      <CardMedia
        component="img"
        height="100%"
        image={props.thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${price} Triệu/tháng`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {` Diện tích: ${props.area}m2`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Khu vực: ${localName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
