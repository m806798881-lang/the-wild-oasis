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

  const { isLoading, data: bookings } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings };
}

export default useBookings;
