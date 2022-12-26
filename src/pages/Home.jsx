import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Nav from "../components/Nav";

const Home = () => {

  const [search, setSearch] = useState("latest")

  const [data, setData] = useState([]);

  const API_URL = `https://news-api-rho.vercel.app/api/`;
  useEffect(() => {

    const getData = async () => {
      const res = await axios.get(API_URL + `NDTV?category=${search}`)
      
      console.log( search, "->", res.data.news.slice(5));
      setData(res.data.news.slice(5))
    }

    getData()
  }, [search, API_URL])
  
  return (
    <>
      <Header />
      <Nav setSearch={setSearch}/>
      <Hero />
      <Main data={data} search={search}/>
      {/* <RecipeReviewCard/> */}
      <Footer />
    </>
  );
};

export default Home;
