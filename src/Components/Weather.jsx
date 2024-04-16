import React, { useState } from "react";
import axios from "axios";

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import clear_icon from "../Assets/clear.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";

export const Weather = () => {
    const [data, setData] = useState({});
    const [current, setCurrent] = useState("");
    const [location, setLocation] = useState("");

    // const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=7dd1f4155311373b6db7d68bd32d318f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=7dd1f4155311373b6db7d68bd32d318f`;

    const searchLocation = () => {
        axios.get(url).then((response) => {
            setData(response.data);
            console.log(data);
        });
        setLocation("");
    };

    const enterButton = (event) => {
        if (event.key === "Enter") {
            searchLocation();
        }
    };

    const mouseClick = () => {
        searchLocation();
    };

    // const weat = () => {
    //     data.weather ? data.weather[0].main : null;
    // }

    return (
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-[670px] w-[400px] md:w-[550px] m-auto mt-5 px-4 flex flex-col rounded-2xl">
            <div className="flex mt-10 justify-center p-4">
                <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyUp={enterButton}
                    className="h-10 w-[320px] md:w-[350px] p-8 outline-none rounded-full font-semibold text-gray-600 placeholder:italic"
                    type="text"
                    placeholder="Enter Location"
                />
                <div
                    onClick={mouseClick}
                    className="h-14 w-14 my-1 flex justify-center items-center bg-white rounded-full cursor-pointer ml-2"
                >
                    <img src={search_icon} alt="/" />
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="text-white font-semibold text-[100px] text-center">
                {/* 24° c */}
                {data.main ? <>{data.main.temp}° c </> : <>° c</>}
            </div>
            <div className="text-white font-semibold text-[40px] text-center">
                {data.name}
            </div>
            <div className="flex justify-around text-white">
                <div className="flex items-center">
                    <img
                        className="h-12 w-12 m-2"
                        src={humidity_icon}
                        alt="icon"
                    />

                    <div>
                        {/* <div>64%</div> */}
                        <div>
                            {data.main ? <>{data.main.humidity}% </> : <>%</>}
                        </div>
                        <div>Humidity</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <img className="h-12 w-12 m-2" src={wind_icon} alt="icon" />

                    <div>
                        {/* <div>18 km/h</div> */}
                        <div>
                            {data.wind ? (
                                <>{data.wind.speed}km/h </>
                            ) : (
                                <>km/h</>
                            )}
                        </div>
                        <div>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};