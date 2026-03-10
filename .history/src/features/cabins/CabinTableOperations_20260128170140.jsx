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
      <Select options={[{value:'',label:},{value:,label:},{value:,label:}]}/>
    </div>
  );
}

export default CabinTableOperations;
