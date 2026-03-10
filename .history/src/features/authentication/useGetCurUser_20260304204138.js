import { useQuery } from "@tanstack/react-query";
import { getCurUser } from "../../services/apiAuth";

function useGetCurUser() {
  const {} = useQuery({ queryFn: () => getCurUser });
  return;
}

export default useGetCurUser;
