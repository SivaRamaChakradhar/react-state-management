import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";

const UserInfo = () => {
  const renderCount = useRef(0)
  renderCount.current++;
  const { state } = useContext(UserContext);

  return (
    <div className="pill">
      <small data-testid="render-count">user-count: {renderCount.current}</small>
      Welcome back, {state.name}
    </div>
  );
};

export default UserInfo;
