import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // 1.filter
  const filterValue = searchParams.get("status") || "all";
  const filter = { value: filterValue, field: "status" };

  // 2.sort
  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const [sortField, sortDirection] = sortByValue.split("-");
  const sortBy = { field: sortField, direction: sortDirection };

  //3.page
  const page = Number(searchParams.get("page")) || 1;

  //4.query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //5.prefetch
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page + 1],
    queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
  });

  return { isLoading, bookings, count, error };
}

export default useBookings;
