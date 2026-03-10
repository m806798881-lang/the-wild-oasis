import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function useRecentBookings() {
  const searchParam = useSearchParams();
  const numDays = !searchParam.get("last")
    ? 7
    : Number(searchParam.get("last"));
    const {}=useQuery({queryFn:})
}
