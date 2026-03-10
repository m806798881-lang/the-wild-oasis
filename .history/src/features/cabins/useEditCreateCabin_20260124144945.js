import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCreateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: ({ newCabin, id }) => editCreateCabin(newCabin, id),
    onSuccess: () => {
      toast.success("new cabin was successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return {};
}
