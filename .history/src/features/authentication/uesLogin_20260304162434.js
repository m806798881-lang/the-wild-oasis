import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiUser";

function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
  });
}
