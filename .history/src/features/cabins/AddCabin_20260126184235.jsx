import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditCreateCabinForm from "./EditCreateCabinForm";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal closeModal={() => setIsOpenModal(false)}>
          <EditCreateCabinForm closeModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
