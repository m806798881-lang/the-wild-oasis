import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useCheckIn(bookingId) {
  const {mutate:checkin,isPending:isChecking} = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { isPaid: true, status: "checked-in" }),
    onSuccess:
  });
}
