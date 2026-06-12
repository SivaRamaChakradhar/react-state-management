import { useRef } from "react";

import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div className="pill">
      <small data-testid="render-count">user-count: {renderCount.current}</small>
      Welcome back, {user.name}
    </div>
  );
};

export default UserInfo;
