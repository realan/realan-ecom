import { useCallback, useEffect, useState } from "react";
export default function useScroller(ref) {
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  
// handle window scroller
  const scroller = useCallback(() => {
    let positionHeight = 0;
    if (ref.current) {
      positionHeight = ref.current.offsetTop + ref.current.offsetHeight;
    }
    if (positionHeight && window.scrollY > positionHeight) {
      setIsFixedHeader(true);
      return;
    }
    setIsFixedHeader(false);
  }, [ref]);
  useEffect(() => {
    if (!window) return;
    scroller();
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, [scroller]);
  return {
    isFixedHeader
  };
}