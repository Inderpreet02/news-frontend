import React, { useEffect, useState } from "react";
import { BiHeart, BiMessage } from "react-icons/bi";
import "./Hero.css";
import apiDummyData from '../apiDummyData.json'
import axios from "axios";

const Hero = () => {

  const API_URL = `http://localhost:5000/api/hero`;
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          API_URL + 'NDTV' + `?category=latest`
        );
        // console.log(response.data.news);
        setData(response.data.news);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // const contentT1 = [
  //   {
  //     date: data[0].date,
  //     name: data[0].name,
  //   }
  // ]
  const contentT = [
    {
      date: "Monday October 17, 2022",
      title: "Ola's Bhavish Aggarwal Challenges Elon Musk With Ultra-Cheap Electric Cars",
      imgURL: "https://c.ndtvimg.com/2019-04/5c614kro_ola-bhavish-aggarwal--bloomberg_120x90_09_April_19.jpg"
    },
    {
      date: "20 September 2019",
      title: `Bayern Munich Confirm Alphonso Davies World Cup "Not In Danger" Despite Leg Injury`,
      imgURL: "https://c.ndtvimg.com/2022-11/hhd4m8i_alphonso-davies-afp_625x300_06_November_22.jpg?im=FaceCrop,algorithm=dnn,width=240,height=180"
    },  
  ]

  const contentB = [
    {
      date: "20 September 2019",
      title: `"England Will Be...": Rohit Sharma Opens Up On Key Factors In India's T20 World Cup Semi-final`,
      imgURL: "https://c.ndtvimg.com/2022-11/pvdsjckg_rohit-sharma-virat-kohli-dinesh-karthik-afp_625x300_02_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180"
    },
    {
      date: "20 September 2019",
      title: `"Already Too Late": Last 8 Years Hottest On Record, UN Report Finds`,
      imgURL: "https://c.ndtvimg.com/2019-09/qrg5jk68_indonesia-forest-fire-afp_120x90_12_September_19.jpg"
    },
  ]
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__mainCard">
            <div className="hero__mainCardContent">
              <p className="hero__date">
                Monday October 17, 2022
              </p>
              <h1 className="hero__heading">
                Kylian Mbappe Insists He \"Never Asked To Leave\" As Paris Saint-Germain Beat Marseille              </h1>
              <div className="hero__icons">
                <span><BiHeart className="hero__icon"/> 200</span>
                <span><BiMessage className="hero__icon"/> 20</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__rightCards">
            <div className="hero__topCards">

              {
                contentT.map((item, __i__) => (
                  <div className="hero__topCard card__pB">
                    <div className="hero__cardContent1" style={{backgroundImage: `url(${item.imgURL})`}}>
                      <p className="hero__date">
                        {item.date}
                      </p>
                      <h1 className="hero__heading">
                        {item.title}
                      </h1>
                      <div className="hero__icons">
                        <span><BiHeart className="hero__icon"/> 200</span>
                        <span><BiMessage className="hero__icon"/> 20</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="hero__topCards">

              {
                contentB.map(item => (
                  <div className="hero__topCard card__pT">
                    <div className="hero__cardContent1" style={{backgroundImage: `url(${item.imgURL})`}}>
                      <p className="hero__date">
                        {item.date}
                      </p>
                      <h1 className="hero__heading">
                        {item.title}
                      </h1>
                      <div className="hero__icons">
                        <span><BiHeart className="hero__icon"/> 200</span>
                        <span><BiMessage className="hero__icon"/> 20</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
