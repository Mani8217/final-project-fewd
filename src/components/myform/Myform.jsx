import React from "react";
import "./Myform.css";

const Myform = () => {
  return (
    <form method="post" action="fieldset.html" class="signup">
      <fieldset>
        <p>
          <label for="firstname">First Name :</label>
          <input type="text" name="firstname" id="firstname" class="text" />
        </p>
        <p>
          <label for="lastname">Last Name : </label>
          <input type="text" name="lastname" id="lastname" class="text" />
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" class="text" />
        </p>
        <p>
          <label for="password">password:</label>
          <input type="password" name="password" id="password" class="text" />
        </p>
      </fieldset>
    </form>
  );
};

export default Myform;
