import { useState } from "react";

/**
 * @description 토글 관련 hook
 */
export default function useToggle(initState = false) {
  const [isActive, setActive] = useState(initState);

  /**
   * @description 토글 활성화/비활성화
   */
  const handleToggleActive = () => {
    setActive((currentActive) => !currentActive);
  };

  return {
    handleToggleActive,
    isToggleActive: isActive,
  };
}
