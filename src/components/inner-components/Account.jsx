import React, { useState } from "react";
import "../../css/account.css";
import Login from "./Login";
import Register from "./Register";

const Account = () => {
  const [form, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!form);
  };
  return (
    <>
      {form ? (
        <Login functionName={toggleForm} />
      ) : (
        <Register functionName={toggleForm} />
      )}
    </>
  );
};

export default Account;
