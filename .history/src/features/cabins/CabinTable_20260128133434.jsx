import Menus from "../../ui/Menus";

import Spinner from "../../ui/Spinner";
import CabinRow from "../cabins/CabinRow";
import useCabin from "./useCabin";
import Table from "../../ui/Table";

function CabinTable() {
  const { isLoading, cabins } = useCabin();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>cabin</div>
          <div>capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
