import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as apiUpdateUser } from "../../services/apiUpdateUser";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: apiUpdateUser,
    onSuccess: () => toast.success("successfully updated"),
    onError: (err) => toast.error(err),
  });
  return { mutate, isPending };
}

export default useUpdateUser;
