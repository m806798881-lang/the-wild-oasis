import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  const { data: recentBookings, isLoading: isLoading1 } = useRecentBookings();
  const{}
  return <StyledDashboardLayout>children</StyledDashboardLayout>;
}

export default DashboardLayout;
