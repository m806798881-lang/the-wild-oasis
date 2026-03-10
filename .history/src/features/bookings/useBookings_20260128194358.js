import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings/getBookings";
import { is } from "date-fns/locale";

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
  return { isLoading };
}

export default useBookings;
