import { useState, useEffect } from "react";
import resDataList from "../data/resDataList";

export default function useRestroData() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [h2, seth2] = useState("Top restaurants near you");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setData(resDataList);
  }, []);

  function setData(resDataList) {
    setRestaurantData(sliceData(resDataList));
    setFilteredList(sliceData(resDataList));
  }

  function sliceData (resDataList) {
    return resDataList.length % 3 === 0
      ? resDataList
      : resDataList.slice(0, Math.floor(resDataList.length / 3) * 3);
  };

  return [
    restaurantData,
    filteredList,
    setFilteredList,
    h2,
    seth2,
    searchTerm,
    setSearchTerm,
  ];
}
