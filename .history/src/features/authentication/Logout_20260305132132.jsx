import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import useLogOut from "./useLogOut";

function Logout() {
  const { logout, isLoading } = useLogOut;
  return (
    <ButtonIcon>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
