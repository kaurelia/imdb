import { useCallback, useEffect, useMemo, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);
  const isMobileListener: MediaQueryList = useMemo(() => {
    return window.matchMedia("(max-width: 768px)");
  }, []);
  const mobileListenerCallback = useCallback(() => {
    setIsMobile(isMobileListener.matches);
  }, [setIsMobile]);
  useEffect(() => {
    setIsMobile(isMobileListener.matches);
    isMobileListener.addEventListener("change", mobileListenerCallback);
    return (): void => {
      isMobileListener.removeEventListener("change", mobileListenerCallback);
    };
  }, [mobileListenerCallback]);
  return isMobile;
};

export default useIsMobile;
