import { useMutation } from "@tanstack/react-query";
import { deleteBooking as apiDelteBooking } from "../../services/apiBookings";

function useDeleteBooking() {
  const { mutate: deleteBooking, isPending: isDeleteBooking } = useMutation({
    mutationFn: (id) => del,
  });
}
export default useDeleteBooking;
