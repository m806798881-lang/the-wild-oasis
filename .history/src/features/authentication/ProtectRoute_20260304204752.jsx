function ProtectRoute({ children }) {
  // 1.验证当前是否有user
const{user,isLoading}
  //2.如果加载时，返回加载器

  //3.如果不存在返回login

  //4.如果存在，返回页面
  return children;
}

export default ProtectRoute;
