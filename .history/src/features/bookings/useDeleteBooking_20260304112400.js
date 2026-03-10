import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as apiDelteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleteBooking } = useMutation({
    mutationFn: (id) => {
      apiDelteBooking(id);
    },
    onSuccess: (data) => {
      toast.success(`#${data.id} is successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("there was an error while deleting"),
  });
  return { deleteBooking, isDeleteBooking };
}
export default useDeleteBooking;
