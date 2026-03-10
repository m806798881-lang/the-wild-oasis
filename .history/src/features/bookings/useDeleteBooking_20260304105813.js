import { useMutation } from "@tanstack/react-query";

function useDeleteBooking() {
  const { mutate: deleteBooking, isPending: isDeleteBooking } = useMutation({mutationFn:(id)=>});
}
export default useDeleteBooking;
