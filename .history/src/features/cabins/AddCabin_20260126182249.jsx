import { useState } from "react";
import Button from "../../ui/Button";
import EditCreateCabinForm from "./EditCreateCabinForm";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Button onClick={() => setShowForm((show) => !show)}>
        Add new cabin
      </Button>
      {showForm && <EditCreateCabinForm />}
    </>
  );
}

export default AddCabin;
