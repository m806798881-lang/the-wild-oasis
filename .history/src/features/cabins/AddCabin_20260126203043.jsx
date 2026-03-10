import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditCreateCabinForm from "./EditCreateCabinForm";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Modal>
      <Modal.open>
        <Button onClick={() => setIsOpenModal((show) => !show)}>
          Add new cabin
        </Button>
      </Modal.open>
      {isOpenModal && (
        <Modal closeModal={() => setIsOpenModal(false)}>
          <EditCreateCabinForm closeModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </Modal>
  );
}

export default AddCabin;
