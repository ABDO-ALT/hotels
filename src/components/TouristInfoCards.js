import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container d-flex justify-content-around">
      <div className="card">
        <img
          src="https://cdn.britannica.com/33/115033-050-5B3A0A5B/Main-Building-University-of-Glasgow-Scot.jpg"
          className="card-img-top"
          alt="glasgow"
          width="310"
          height="174"
        />
        <div className="card-body">
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaw_2B3flEivipF3cxnOrajeA5FYW-9aDjrHD_WpXsJxaQBlYmQ"
          className="card-img-top"
          alt="manchester"
          width="310"
          height="174"
        />
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i.pinimg.com/originals/35/37/8e/35378e9737c4ecb3d3990cc2b0f53b24.jpg"
          className="card-img-top"
          alt="london"
          width="310"
          height="174"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
