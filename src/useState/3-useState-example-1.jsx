import React, { useState } from "react";

const Index = () => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <button onClick={handleClick}>{showData ? "hide" : "show"}</button>
      {/* {showData && (
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam
          tempore fugiat iste repellat accusamus sint cupiditate assumenda eos
          eum?
        </div>
      )} */}
      {showData ? (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolorem perferendis voluptas aliquam quibusdam enim, illo maxime quae
          alias ab?
        </div>
      ) : (
        <h3>data is hidden</h3>
      )}
    </div>
  );
};

export default Index;
