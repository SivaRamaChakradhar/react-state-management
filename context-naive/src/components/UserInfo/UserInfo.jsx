import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";

const UserInfo = () => {
  const renderCount = useRef(0)
  renderCount.current++;
  const { state } = useContext(AppContext);

  return (
    <div className="pill">
      <small data-testid="render-count">user-count: {renderCount.current}</small>
      Welcome back, {state.user.name}
    </div>
  );
};

export default UserInfo;
