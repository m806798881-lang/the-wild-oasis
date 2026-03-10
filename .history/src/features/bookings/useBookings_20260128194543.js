import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings/getBookings";

function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  console.log(error);
  return { isLoading, bookings };
}

export default useBookings;
