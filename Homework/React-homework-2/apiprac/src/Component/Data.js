import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = props.URL;

  useEffect((props) => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);
        const response = await axios.get(props.URL);
        setData(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  return <ul></ul>;
};

export default Data;
