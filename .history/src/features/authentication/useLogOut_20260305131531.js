import { useMutation } from "@tanstack/react-query"
import {logout as apiLogOut} from '../../services/apiAuth'

function useLogOut() {
const {mutate:logout,isPending:isLoading}=useMutation({mutationFn:,onSuccess})
}

export default useLogOut
