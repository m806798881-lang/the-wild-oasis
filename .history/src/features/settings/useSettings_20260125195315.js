import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useSettings() {
  const {} = useQuery({ queryKey: ["settings"], queryFn: getSettings });
}
