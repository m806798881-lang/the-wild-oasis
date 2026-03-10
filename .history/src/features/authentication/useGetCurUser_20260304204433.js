import { useQuery } from "@tanstack/react-query";
import { getCurUser } from "../../services/apiAuth";

function useGetCurUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: () => getCurUser,
    queryKey: ["user"],
  });
  return;
}

export default useGetCurUser;
