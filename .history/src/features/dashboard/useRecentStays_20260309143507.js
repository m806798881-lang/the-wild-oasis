import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

export default function useRecentStays() {
  const searchParam = useSearchParams();
  const numDays = !searchParam.get("last")
    ? 7
    : Number(searchParam.get("last"));

  const lastDate = subDays(new Date(), numDays).toISOString();

  const { data, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(lastDate),
    queryKey: ["stays", `last-${numDays}`],
  });
  const confirmStays = data?.filter((stay) => stay.status === "");
  return { data, isLoading };
}
