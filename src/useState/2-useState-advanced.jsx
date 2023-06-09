import React, { useState } from "react";

const Index = () => {
  const initialArray = [
    {
      id: "ancnjsvuhuef",
      firstName: "emma",
      lastName: "watson",
      age: 27,
    },
    {
      id: "jncjbcbbeiuvbu",
      firstName: "girish",
      lastName: "adapa",
      age: 23,
    },
    {
      id: "jncjbcbbevbu",
      firstName: "girsh",
      lastName: "adap",
      age: 23,
    },
  ];
  const [data, setData] = useState(initialArray);
  console.log(data);

  const handleDelete = (comingId) => {
    const filterData = data.filter((eachItem) => {
      return eachItem.id !== comingId;
    });
    setData(filterData);
  };
  return (
    <div>
      <ul>
        {data.map((eachItem, index) => {
          const { firstName, lastName, age, id } = eachItem;
          return (
            <li key={index}>
              <div>
                my firstName <strong>{firstName}</strong>
              </div>
              <div>
                my lastName <strong>{lastName}</strong>
              </div>
              <div>
                my age <strong>{age}</strong>
              </div>
              <button onClick={() => handleDelete(id)}>delete me</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
