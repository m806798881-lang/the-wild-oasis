import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCreateCabin as editCreateCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCreateCabin, isPending: isCreating } = useMutation({
    mutationFn: ({ newCabin, id }) => editCreateCabinApi(newCabin, id),
    onSuccess: () => {
      toast.success("new cabin was successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { editCreateCabin, isCreating };
}
