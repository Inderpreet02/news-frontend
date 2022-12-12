import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import RecipeReviewCard from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import apiDummyData from "../apiDummyData.json";
import axios from "axios";

const TermPage = () => {
  const { term } = useParams();

  const API_KEY = "970d448337af4526a32943339ad14ec1";

  //GET https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=API_KEY

  const [data, setData] = useState(apiDummyData.articles);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${term}&apiKey=${API_KEY}`
        );
        // console.log(response.data.articles);
        setData(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // console.log(data);
  }, [term]);

  return (
    <>
      <Header />
      <Nav />
      {/* <Skeleton count={5} />  */}
      <RecipeReviewCard data={data} />
      <Footer />
    </>
  );
};

export default TermPage;
