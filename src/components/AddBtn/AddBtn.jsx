import React, { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import Backdrop from "../Backdrop/Backdrop";
import ModalAddMovie from "../ModalAddMovie/ModalAddMovie";
import css from './styles.module.css'
const AddBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className={css.addBtn} onClick={toggleModal}>Add new movie</button>
      {isModalOpen && (
        <ModalPortal>
          <Backdrop close={toggleModal}>
            <ModalAddMovie close={toggleModal} />
          </Backdrop>
        </ModalPortal>
      )}
    </>
  );
};

export default AddBtn;
