import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as apiLogOut } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: () => apiLogOut(),
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: (err) => toast.error(err),
  });
  return { logout, isLoading };
}

export default useLogOut;
