import { useMutation } from "@tanstack/react-query";
import { updateUser as apiUpdateUser } from "../../services/apiUpdateUser";
import toast from "react-hot-toast";

function useUpdateUser() {
  const {} = useMutation({
    mutationFn: apiUpdateUser,
    onSuccess: () => toast.success("successfully updated"),
  });
}

export default useUpdateUser;
