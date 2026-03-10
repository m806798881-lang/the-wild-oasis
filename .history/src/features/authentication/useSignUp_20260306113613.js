import { useMutation } from "@tanstack/react-query";
import { signup as apiSignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: apiSignUp,
    onSuccess: () =>
      toast.success("successfully sign up,please confirm in your email"),
  });
  return { signup, isLoading };
}

export default useSignUp;
