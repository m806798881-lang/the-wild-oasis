import { useMutation } from "@tanstack/react-query";

function useLogin(){
  const{mutate:login,isPending}=useMutation({mutationFn:()=>})
}