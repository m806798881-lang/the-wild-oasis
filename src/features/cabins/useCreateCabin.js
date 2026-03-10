import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCreateCabin as editCreateCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: (newCabin) => editCreateCabinApi(newCabin),
    onSuccess: () => {
      toast.success("new cabin was successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createCabin, isCreating };
}
