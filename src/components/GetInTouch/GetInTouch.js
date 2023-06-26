import React, { useState } from "react";

const GetInTouch = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    massage: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [massage, setMassage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleMail = (event) => {
    setEmail(event.target.value);
    console.log(name);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
    console.log(name);
  };
  const handleMassage = (event) => {
    setMassage(event.target.value);
    console.log(name);
  };

  const onSubmit = (type, event) => {
    setFormValues(
      (formValues.name = name),
      (formValues.email = email),
      (formValues.phone = phone),
      (formValues.massage = massage)
    );
    console.log(formValues);
  };

  return (
    <div className="flex flex-col pt-20">
      <div className="text-6xl font-relaway font-bold w-full text-center py-12">
        Get In Touch
      </div>
      <div className="container mx-auto flex items-center justify-center pt-10">
        <div className="w-[75%] h-[600px] bg-orange-500 rounded-t-full flex items-center justify-center flex-col gap-5 pt-20">
          <input
            className="w-[50%] h-14 rounded-xl p-3 text-center"
            value={name}
            placeholder="Name"
            onChange={handleName}
            id="name"
          ></input>
          <input
            className="w-[50%] h-14 rounded-xl p-3 text-center"
            value={email}
            placeholder="Email"
            onChange={handleMail}
            id="name"
          ></input>
          <input
            className="w-[50%] h-14 rounded-xl p-3 text-center"
            value={phone}
            placeholder="Phone Number"
            onChange={handlePhone}
            id="name"
          ></input>
          <input
            className="w-[50%] h-36 rounded-xl p-3 text-center"
            value={massage}
            placeholder="Massage"
            onChange={handleMassage}
            id="name"
          ></input>
          <button
            className="w-60 h-20 bg-orange-800 hover:bg-white text-white hover:text-orange-500 rounded-lg font-relaway text-2xl font-medium transition-all duration-300"
            onClick={() => onSubmit()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
