import { useEffect, useState } from "react";

const useJsonFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setData(data.status);
          setError(null);
        } else {
          setError(data.status);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useJsonFetch;
