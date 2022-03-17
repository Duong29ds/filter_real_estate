const initialState = {
  province: {
    name: "Hà Nội",
    slug: "ha-noi",
    type: "thanh-pho",
    name_with_type: "Thành phố Hà Nội",
    code: "01",
  },
  district: {
    name: "Long Biên",
    type: "quan",
    slug: "long-bien",
    name_with_type: "Quận Long Biên",
    path: "Long Biên, Hà Nội",
    path_with_type: "Quận Long Biên, Thành phố Hà Nội",
    code: "004",
    parent_code: "01",
  },
  price: [3, 5],
  area: [30, 50],
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
