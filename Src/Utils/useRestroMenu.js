import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestroMenu = (resId) => {
  const [restroInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setResInfo(json.data);
  };
  return restroInfo;
};

export default useRestroMenu;
