import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

function useRecentBookings() {
  const searchParam = useSearchParams();
  const numDays = !searchParam.get("last")
    ? 7
    : Number(searchParam.get("last"));
  const lastDate=subDays(new Date(),numDays).toISOString();
  const {data,} = useQuery({ queryFn: getBookingsAfterDate,queryKey: });
}
