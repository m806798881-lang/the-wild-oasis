import { useMutation } from "@tanstack/react-query";

function useSignUp() {
  const { mutate: signup, isPending: isLoading } = useMutation({ mutationFn });
}

export default useSignUp;
