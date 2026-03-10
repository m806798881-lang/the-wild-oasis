import Filter from "../../ui/Filter";
import Select from "../../ui/Select";

function CabinTableOperations() {
  return (
    <div>
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
          { value: "", label: "sort by price()" },
        ]}
      />
    </div>
  );
}

export default CabinTableOperations;
