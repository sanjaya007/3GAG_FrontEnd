import React, { useState } from "react";
import "../../css/account.css";
import Login from "./Login";
import Register from "./Register";

const Account = (props) => {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };
  return (
    <>
      {form ? (
        <Login functionName={toggleForm} closeModal={props.closeModal} />
      ) : (
        <Register functionName={toggleForm} />
      )}
    </>
  );
};

export { Account };
