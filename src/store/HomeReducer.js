import data from "../data/data";
const initialState = [...data];

const HomeReducer = (state = initialState, action) => {
  if (action.type === "filterData") {
    const formInfo = action.formInfo;
    const dataResult = initialState.filter((item) => {
      let isFitProvince = true,
        isFitDistrict = true,
        isFitPrice = true,
        isFitArea = true;
      console.log(formInfo.price[0]);
      console.log(formInfo.price[1]);
      const itemPrice = item.price / 1000000;
      if (
        formInfo.province.code !== item.city &&
        formInfo.province.name !== "NULL"
      ) {
        isFitProvince = false;
        console.log(formInfo.province.code !== item.city);
        console.log(formInfo.province.name !== "NULL");
      }
      if (
        formInfo.district.code !== item.district &&
        formInfo.district.name !== "NULL"
      ) {
        isFitDistrict = false;
      }
      if (
        (formInfo.price[0] > itemPrice && formInfo.price[0] !== null) ||
        (formInfo.price[1] < itemPrice && formInfo.price[1] !== null)
      ) {
        isFitPrice = false;
      }
      if (
        (formInfo.area[0] > item.area && formInfo.area[0] !== null) ||
        (formInfo.area[1] < item.area && formInfo.area[1] !== null)
      ) {
        isFitArea = false;
      }
      console.log(isFitProvince, isFitDistrict, isFitPrice, isFitArea);
      return isFitProvince && isFitDistrict && isFitPrice && isFitArea;
    });
    return dataResult;
  }
  return state;
};

export default HomeReducer;
