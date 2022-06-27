import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import Modal from "../../Components/Modal/Modal";
import "./HomePage.scss";

const HomePage = (props) => {
  const [modalData, setModalData] = useState(null)


  const selectEmployee = (obj) => {
    setModalData(obj)
}

  return props.loading ? (
    <div className='loading-transparent'>
      <div classNameloading>
      <img src="https://media0.giphy.com/media/3y0oCOkdKKRi0/200.webp?cid=ecf05e47jsfa0zc4p1rfvo95qpxmbd9wlbqedf8iv3jp94x2&rid=200.webp&ct=g" alt="" />
        </div>
        </div>
  ) : (
    <div>
      {props.modal && <Modal toggleModal={props.toggleModal} modal={modalData}/>}
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
            <EmployeeCard data={e} toggleModal={props.toggleModal} selectEmployee={selectEmployee}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
