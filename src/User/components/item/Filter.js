import districts from "../../../data/districts";
import provinces from "../../../data/provinces";

export const filterDistrict = (districtCode) => {
  const districtArray = Object.values(districts);
  return districtArray.find((district) => district.code === districtCode);
};

export const filterProvince = (provinceCode) => {
  return provinces.map((province) => province.code === provinceCode);
};
