import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const ListItem = () => {
  const data = useSelector((state) => state.homeReducer);
  console.log(data);
  return (
    <div className="list-item">
      {data.map((item) => (
        <Item
          key={item.thumbnail}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          area={item.area}
          cityCode={item.city}
          districtCode={item.district}
          content={item.content}
        />
      ))}
    </div>
  );
};
export default ListItem;
