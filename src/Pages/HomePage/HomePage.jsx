import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import Modal from "../../Components/Modal/Modal";
import "./HomePage.scss";

const HomePage = (props) => {
  return props.loading ? (
    <div ><img src="https://media4.giphy.com/media/11ASZtb7vdJagM/200w.webp?cid=ecf05e47qsyexy93f9pa7zweho4dr1p7hgqw0iwuwqq7p48n&rid=200w.webp&ct=g" alt="" /></div>
  ) : (
    <div>
      {props.modal && <Modal toggleModal={props.toggleModal} />}
      <Header togglePages={props.togglePages} />
      <div className="main">
        <div className="side-bar">
          <div className="our-crew">
          <h2>Our crew:</h2>
          <h3
            onClick={() => {
              props.fetchData("backend");
            }}
          >
            Backend
          </h3>
          <h3
            onClick={() => {
              props.fetchData("frontend");
            }}
          >
            Frontend
          </h3>
          <h3
            onClick={() => {
              props.fetchData("boardOfDirectors");
            }}
          >
            Board Of Directors
          </h3>
          <h3
            onClick={() => {
              props.fetchData("managers");
            }}
          >
            Office Managers
          </h3>
          </div>
        </div>
        <div className="cards">
          {props.data?.map((e) => (
            <EmployeeCard data={e} toggleModal={props.toggleModal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
