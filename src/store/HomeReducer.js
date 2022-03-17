import data from "../data/data";
const initialState = [...data];

const HomeReducer = (state = initialState, action) => {
  if (action.type === "filterData") {
    const formInfo = action.formInfo;
    const dataResult = initialState.filter((item) => {
      const itemPrice = item.price / 1000000;
      const isFit =
        formInfo.price[0] <= itemPrice &&
        formInfo.price[1] >= itemPrice &&
        formInfo.area[0] <= item.area &&
        formInfo.area[1] >= item.area &&
        formInfo.province.code === item.city &&
        formInfo.district.code === item.district;
      return isFit;
    });
    return dataResult;
  }
  return state;
};

export default HomeReducer;
