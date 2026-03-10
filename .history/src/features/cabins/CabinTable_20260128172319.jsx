import Menus from "../../ui/Menus";

import Spinner from "../../ui/Spinner";
import CabinRow from "../cabins/CabinRow";
import useCabin from "./useCabin";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabin();
  const [searchParams] = useSearchParams();
  const curFilterSearchParams = searchParams.get("discount") || "all";
  const curSortSearchParams = searchParams.get("sortBy") || "startDate-asc";

  // 1.filter
  let filteredCabins;
  if (curFilterSearchParams === "all") filteredCabins = cabins;
  if (curFilterSearchParams === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (curFilterSearchParams === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //2.sort

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
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
