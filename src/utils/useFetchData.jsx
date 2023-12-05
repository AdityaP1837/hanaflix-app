import { useEffect } from "react";
import { useState } from "react";
import { fetchApi } from "./api";

const useFetchData = (query) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setData([]);
		setLoading(true);
		setError(false);

		fetchApi(query)
			.then((data) => {
				setLoading(false);
				setData(data);
			})
			.catch((err) => {
				setLoading(false);
				setError(err);
			});
	}, [query]);
	return { data, loading, error };
};

export default useFetchData;
