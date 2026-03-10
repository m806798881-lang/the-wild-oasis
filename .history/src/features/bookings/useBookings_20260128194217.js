import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings/getBookings";

function useBookings() {
  const { isLoading, data } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return <div></div>;
}

export default useBookings;
