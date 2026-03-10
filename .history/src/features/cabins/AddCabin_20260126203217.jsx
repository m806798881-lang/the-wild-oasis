import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditCreateCabinForm from "./EditCreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open>
        <Button onClick={() => setIsOpenModal((show) => !show)}>
          Add new cabin
        </Button>
      </Modal.Open>
      <Modal.Window>
        <EditCreateCabinForm closeModal={() => setIsOpenModal(false)} />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
