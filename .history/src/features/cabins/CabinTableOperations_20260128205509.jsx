import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import Select from "../../ui/Select";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <Select
        options={[
          { value: "name-asc", label: "sort by name(A-Z)" },
          { value: "name-desc", label: "sort by name(Z-A)" },
          { value: "regularPrice-asc", label: "sort by price(low first)" },
          { value: "regularPrice-desc", label: "sort by price(high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
