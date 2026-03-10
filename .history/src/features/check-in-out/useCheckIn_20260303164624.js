import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckIn(bookingId) {
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { isPaid: true, status: "checked-in" }),
    onSuccess: () => toast.success(""),
  });
}
