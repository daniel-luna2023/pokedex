import React, { useRef } from "react";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { useNavigate } from "react-router-dom";
import "./stiylecss/homepage.css";
import FooterPokeball from "../components/layouts/FooterPokeball";

const HomePages = () => {
  //const nameTrainer = useSelector(store => store.trainer )
  //console.log(nameTrainer)

  const inputTrainer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTrainer = (e) => {
    e.preventDefault();
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <main className="home_page">
      <section className="home_container">
        <article className="home_article">
          <div className="home_page_img">
            <img src="/images/front.png" alt="" />
          </div>
          <div>
          <h2 className="home_title">¡Hi Trainer!</h2>
          </div>
           <p>To start, please, give me your name</p>
          <form className="home_input" onSubmit={handleTrainer}>
            <input ref={inputTrainer} type="text" placeholder="You Name..." />
            <button>Start!</button>
          </form>
        </article>
      </section>
      <div>
        <img src="/images/pi-pag.png" alt="" class="imagen"/>
      </div> <br />
      
    </main>
  );
};

export default HomePages;
