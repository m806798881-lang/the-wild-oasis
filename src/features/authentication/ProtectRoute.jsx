import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import useGetCurUser from "./useGetCurUser";
import { useEffect } from "react";

function ProtectRoute({ children }) {
  const naviagte = useNavigate();

  // 1.验证当前是否有user
  const { user, isLoading } = useGetCurUser();

  useEffect(
    function () {
      if (!user && !isLoading) return naviagte("/login");
    },
    [isLoading, user, naviagte]
  );
  //2.如果加载时，返回加载器
  if (isLoading) return <Spinner />;
  //3.如果不存在返回login

  //4.如果存在，返回页面
  if (user) return children;
}

export default ProtectRoute;
