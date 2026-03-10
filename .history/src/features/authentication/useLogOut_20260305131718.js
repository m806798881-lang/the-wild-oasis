import { useMutation } from "@tanstack/react-query";
import { logout as apiLogOut } from "../../services/apiAuth";
import { replace, useNavigate } from "react-router-dom";

function useLogOut() {
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: apiLogOut(),
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });
}

export default useLogOut;
