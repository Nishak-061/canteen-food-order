// src/hooks/useFetchData.js
import { useState, useEffect } from 'react';
import config from '../config';

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);  
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
