const initialState = {
  province: { name: "NULL" },
  district: { name: "NULL" },
  price: [null, null],
  area: [null, null],
};

const filterReducer = (state = initialState, action) => {
  if (action.type === "setProvince") {
    return {
      province: { ...action.newProvince },
      district: state.district,
      price: state.price,
      area: state.area,
    };
  }
  if (action.type === "setDistrict") {
    return {
      province: state.province,
      district: { ...action.newDistrict },
      price: state.price,
      area: state.area,
    };
  }
  if (action.type === "setPrice") {
    return {
      province: state.province,
      district: state.district,
      price: [...action.price],
      area: state.area,
    };
  }
  if (action.type === "setArea") {
    return {
      province: state.province,
      district: state.district,
      price: state.price,
      area: [...action.area],
    };
  }
  return state;
};

export default filterReducer;
