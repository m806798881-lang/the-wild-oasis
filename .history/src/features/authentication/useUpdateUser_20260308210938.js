import { useMutation } from "@tanstack/react-query";
import { updateUser as apiUpdateUser } from "../../services/apiUpdateUser";

function useUpdateUser() {
  const {} = useMutation({ mutationFn: apiUpdateUser, onSuccess });
}

export default useUpdateUser;
