import Filter from "../../ui/Filter";
import Row from "../../ui/Row";
import Select from "../../ui/Select";

function CabinTableOperations() {
  return (
    <Row type="horizontal">
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
    </Row>
  );
}

export default CabinTableOperations;
