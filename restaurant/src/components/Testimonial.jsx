// Testimonial.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AmbianceImage1 from "../assets/Ambiance.jpg";
import AmbianceImage2 from "../assets/Interior.jpg";

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      name: "Ram",
      comment: "Excellent food and great service! Will definitely come back.",
    },
    {
      id: 2,
      name: "Abhay",
      comment: "The ambiance is fantastic, and the staff is friendly.",
    },
    {
      id: 3,
      name: "Shweta",
      comment: "Had a wonderful dining experience. The food was delicious.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-10 bg-gray-800">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Customer Feedback</h2>
          <p className="text-gray-500">See what our customers are saying about us</p>
        </div>

        <Slider {...settings}>
          {feedbackData.map((feedback) => (
            <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">{feedback.comment}</p>
              <p className="text-gray-500">- {feedback.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Ambiance = () => {
  return (
    <div className="py-10 bg-gray-800">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Restaurant Ambiance</h2>
          <p className="text-gray-500">Experience the inviting atmosphere of our restaurant</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={AmbianceImage1}
              alt="Ambiance Image 1"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-700">
              Our cozy interior provides a warm and welcoming atmosphere for our guests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={AmbianceImage2}
              alt="Ambiance Image 2"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-700">
              Enjoy a delightful dining experience with our stylish and comfortable seating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div>
      <Feedback />
      <Ambiance />
    </div>
  );
};

export default Testimonial;
