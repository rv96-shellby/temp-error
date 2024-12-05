import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchMovies = ({ selector, endpoint, actionCreator }) => {
  const dispatch = useDispatch();
  const data = useSelector(selector);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint.url, endpoint.options);
      const json = await response.json();
      if (json.results) {
        dispatch(actionCreator(json.results));
      } else {
        console.error(`Failed to fetch data from ${endpoint.url}`, json);
      }
    } catch (error) {
      console.error(`Error fetching data from ${endpoint.url}`, error);
    }
  };

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchData();
    }
  }, [data, endpoint.url]);

  return data;
};

export default useFetchMovies;
