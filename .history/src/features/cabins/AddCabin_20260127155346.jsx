import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import EditCreateCabinForm from "./EditCreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open openWindowName="createCabin">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="createCabin">
          <EditCreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
