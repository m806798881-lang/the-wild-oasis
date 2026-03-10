import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import useCabin from "../cabins/useCabin";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { data: recentBookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    recentStays,
    isLoading: isLoading2,
    confirmStays,
    numDays,
  } = useRecentStays();
  const { isLoading: isLoading3, cabins } = useCabin();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={recentBookings}
        confirmedStays={confirmStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
