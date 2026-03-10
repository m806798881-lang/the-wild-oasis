import { useQuery } from "@tanstack/react-query";

function useBookings() {
  const {isLoading,data}=useQuery({queryKey:['bookings'],queryFn:})
  return <div></div>;
}

export default useBookings;
