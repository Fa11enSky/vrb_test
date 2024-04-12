import React from "react";

const ModalUpdate = ({ movie }) => {
  return (
    <div>
      <form>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <input type="text" name="derector" />
        <input type="text" name="actors" />
        <input type="text" name="imageUrl" />
        <input type="text" name="date" />
        <input type="text" name="rating" />
      </form>
    </div>
  );
};

export default ModalUpdate;
