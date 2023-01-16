import React, { useEffect, useState } from "react";
import { BiHeart, BiMessage } from "react-icons/bi";
import "./Hero.css";
import axios from "axios";

const Hero = () => {
  const API_URL = `https://news-api-rho.vercel.app/api/`;
  const [poster, setPoster] = useState([]);
  const [contentA, setContentA] = useState([]);
  const [contentB, setContentB] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(API_URL + `NDTV?category=latest`);
        // console.log(response.data.news);
        setPoster(response.data.news.slice(0, 1));
        setContentA(response.data.news.slice(1, 3));
        setContentB(response.data.news.slice(3, 5));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [API_URL]);

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          {poster[0] && (
            <div className="hero__mainCard">
              <div
                className="hero__mainCardContent"
                style={{ backgroundImage: `url(${poster[0].imageURL})` }}
              >
                <p className="hero__date">{poster[0].date}</p>
                <a className="hero__heading" href={`${poster[0].redirectURL}`}>{poster[0].name}</a>
                <div className="hero__icons">
                  <span>
                    <BiHeart className="hero__icon" /> 200
                  </span>
                  <span>
                    <BiMessage className="hero__icon" /> 20
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hero__right">
          <div className="hero__rightCards">
            <div className="hero__topCards">
              {contentA.map((item, __i__) => (
                <div key={__i__} className="hero__topCard card__pB">
                  <div
                    className="hero__cardContent1"
                    style={{ backgroundImage: `url(${item.imageURL})` }}
                  >
                    <p className="hero__date">{item.date}</p>
                    <h1 className="hero__heading">{item.name}</h1>
                    <div className="hero__icons">
                      <span>
                        <BiHeart className="hero__icon" /> 200
                      </span>
                      <span>
                        <BiMessage className="hero__icon" /> 20
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero__topCards card__hidden">
              {contentB.map((item, __i__) => (
                <div key={__i__} className="hero__topCard card__pT">
                  <div
                    className="hero__cardContent1"
                    style={{ backgroundImage: `url(${item.imageURL})` }}
                  >
                    <p className="hero__date">{item.date}</p>
                    <h1 className="hero__heading">{item.name}</h1>
                    <div className="hero__icons">
                      <span>
                        <BiHeart className="hero__icon" /> 200
                      </span>
                      <span>
                        <BiMessage className="hero__icon" /> 20
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
