import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();

  // 1.filter
  const filterValue = searchParams.get("status") || "all";
  const filter = { value: filterValue, field: "status" };

  // 2.sort
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const [sortField, sortDirection] = sortByValue.split("-");
  const sortBy = { field: sortField, direction: sortDirection };

  //3.page
  const page = Number(searchParams.get("page")) || 1;

  const {
    isLoading,
    data: { data: bookings, count },
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, count };
}

export default useBookings;
