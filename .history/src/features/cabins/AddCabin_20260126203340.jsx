import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditCreateCabinForm from "./EditCreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window>
        <EditCreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
