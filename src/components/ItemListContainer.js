import React from "react";

export const ItemListContainer = ({ greetings }) => {
  return (
    <body>
      <div>
        <p className="saludo">{greetings}</p>
      </div>
    </body>
  );
};
export default ItemListContainer;
