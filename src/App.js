import React, { useEffect, useState } from "react";
import "./style.scss";
import HomePage from "./Pages/HomePage/HomePage";
import HiringPage from "./Pages/HiringPage/HiringPage";
import { Switch, Route } from "react-router-dom";
import "./style.scss";

const url = "https://62b47af3da3017eabb0b778e.mockapi.io/";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [isDataValid, setIsDataValid] = useState(true)
  // const [backend, setBackend] = useState([])
  // const [frontend, setFrontend] = useState([])
  // const [boardOfDirectors, setBoardOfDirectors] = useState([])
  // const [managers, setManagers] = useState([])
  // const [page, setPage] = useState(true);

  const activateFetch = () => {
    setIsDataValid(!isDataValid)
  }



  const fetchData = (developers) => {
    setLoading(true);
    fetch(`${url}${developers}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  // const fetchBackend = () =>{
  //   fetch(`${url}backend`)
  //   .then(res => res.json())
  //   .then(data => setBackend(data))
  // }

  // const fetchDirectors = () =>{
  //   fetch(`${url}boardOfDirectors`)
  //   .then(res => res.json())
  //   .then(data => setBoardOfDirectors(data))
  // }

  // const fetchManagers = () =>{
  //   fetch(`${url}managers`)
  //   .then(res => res.json())
  //   .then(data => setManagers(data))
  // }

  useEffect(() => {
    fetchData("frontend");
  }, [isDataValid]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage
            loading={loading}
            data={data}
            fetchData={fetchData}
            modal={modal}
            toggleModal={toggleModal}
            activateFetch={activateFetch}
          />
        </Route>
        <Route path="/new-developer">
          <HiringPage activateFetch={activateFetch} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
