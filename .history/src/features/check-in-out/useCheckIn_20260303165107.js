import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckIn() {
  const queryClient = useQueryClient();
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { isPaid: true, status: "checked-in" }),
    onSuccess: (data) => {
      toast.success(`boonking #${data.id} successfully checked in.`);
      queryClient.invalidateQueries({ active: true });
    },
  });
}
