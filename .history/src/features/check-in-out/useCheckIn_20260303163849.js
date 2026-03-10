import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useCheckIn() {
  const {} = useMutation({ mutationFn: () => updateBooking(bookingId) });
}
