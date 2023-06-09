import React, { useState } from "react";

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const changeFirstName = (e) => {
  //     console.log(e.target.value);
  //     setFirstName(e.target.value);
  //   };

  //   const changeEmail = (e) => {
  //     console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };

  //   const changePassword = (e) => {
  //     console.log(e.target.value);
  //     setPassword(e.target.value);
  //   };

  //   const handleInputChange = (e, name) => {
  //     if (name === "firstName") {
  //       setFirstName(e.target.value);
  //     } else if (name === "email") {
  //       setEmail(e.target.value);
  //     } else if (name === "password") {
  //       setPassword(e.target.value);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstName: firstName,
      email: email,
      password: password,
    };
    console.log(userObj);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            placeholder="enter your name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </div>
        <div className="form-button">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
