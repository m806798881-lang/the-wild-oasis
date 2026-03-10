import { useMutation } from "@tanstack/react-query";
import { deleteBooking as apiDelteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const { mutate: deleteBooking, isPending: isDeleteBooking } = useMutation({
    mutationFn: (id) => apiDelteBooking(id),
    onSuccess: (data) => toast.success(`#${data.id} is successfully deleted`),
    onError,
  });
}
export default useDeleteBooking;
