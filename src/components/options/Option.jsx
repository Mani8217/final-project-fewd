import React from "react";
import Myform from "../myform/Myform";
import "./Option.css";

const Option = () => {
  return (
    <div className="option-container">
      <section className="option-purple option-grid">
        <h2>Option number One</h2>
        <p>Post news, share trades, comment your</p>
        <div className="myregister">
          <Myform />
        </div>

        <span>
          <button>Sign Up</button>
        </span>
      </section>
      <section className="option-orange option-grid">
        <h2>Option Number two</h2>
        <p>Post news, share trades, comment your thoughts..</p>
        <div className="myregister">
          <Myform />
        </div>
        <span>
          <button>Sign Up</button>
        </span>
      </section>
      <section className="option-blue option-grid">
        <h2>Option number three</h2>
        <p>Post news, share trades, comment your thoughts..</p>
        <div className="myregister">
          <Myform />
        </div>
        <span>
          <button>Sign Up</button>
        </span>
      </section>
    </div>
  );
};
export default Option;
