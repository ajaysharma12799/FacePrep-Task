/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
      );
      console.log(data);
      setUsers((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="container mx-auto w-[90%] md:w-1/2 my-5">
      {users.map((user, index) => (
        <Card user={user} key={index} />
      ))}
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default Dashboard;
