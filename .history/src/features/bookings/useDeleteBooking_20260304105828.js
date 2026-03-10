import { useMutation } from "@tanstack/react-query";

function useDeleteBooking() {
  const { mutate: deleteBooking, isPending: isDeleteBooking } = useMutation({
    mutationFn: (id) => del,
  });
}
export default useDeleteBooking;
