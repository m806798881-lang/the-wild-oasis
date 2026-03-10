import { useMutation } from "@tanstack/react-query";
import { signup as apiSignUp } from "../../services/apiAuth";

function useSignUp() {
  const { mutate: signup, isPending: isLoading } = useMutation({ mutationFn: });
  return { signup, isLoading };
}

export default useSignUp;
