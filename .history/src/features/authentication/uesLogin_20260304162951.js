import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: () => navigate("/"),
    onError: (error) => {
      console.log("Error", error);
      toast.error("provided email or password ");
    },
  });
}
