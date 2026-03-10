import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error("provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}
