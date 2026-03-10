import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import EditCreateCabinForm from "./EditCreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import useCreateCabin from "./useCreateCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { deleteCabin, isDeleting } = useDeleteCabin();
  const { createCabin } = useCreateCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Modal>
          <Menus.List id={cabinId}>
            <Menus.Button onClick={handleDuplicate} icon={<HiSquare2Stack />}>
              Duplicate
            </Menus.Button>

            <Modal.Open openWindowName="editCabin">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>
            <Modal.Open openWindowName="confirmDelete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="editCabin">
            <EditCreateCabinForm toEditCabin={cabin} />
          </Modal.Window>

          <Modal.Window name="confirmDelete">
            <ConfirmDelete
              resourceName={name}
              onConfirm={() => deleteCabin(cabinId)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Menus.Menu>
      
    </Table.Row>
  );
}

export default CabinRow;
