import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import axios from "axios";
import TestCard from "../components/TestCard";

const Test = () => {
  const { source, category } = useParams();
  const [data, setData] = useState();

  const API_URL = `https://news-api-rho.vercel.app/api/`;

  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          API_URL + "NDTV" + `?category=${category}`
        );
        // console.log(response.data.news);
        setData(response.data.news);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [source, API_URL, category]);

  console.log(data);

  return (
    <>
      <Header />
      <h1 style={{margin: "40px", color: "#fff", textTransform: "uppercase"}} className="test__heading">{category} News from {source}</h1>
      <TestCard data={data} />
      <Footer />
    </>
  );
};

export default Test;
