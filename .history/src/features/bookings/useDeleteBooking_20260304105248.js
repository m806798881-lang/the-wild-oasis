import { useMutation } from "@tanstack/react-query";

function useDeleteBooking() {
  const { mutate: deleteBooking, isPending } = useMutation({});
}
export default useDeleteBooking;
