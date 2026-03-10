import { useMutation } from "@tanstack/react-query";
import {updateUser as apiUpdateUser} from '../../services/apiUpdateUser'

function useUpdateUser() {
  const {} = useMutation({ mutationFn:, onSuccess });
}

export default useUpdateUser;
