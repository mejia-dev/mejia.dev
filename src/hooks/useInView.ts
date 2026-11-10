import { RefObject, useEffect, useState } from "react";

export default function useInView<T extends Element>(ref: RefObject<T | null>, threshold = 0.15): boolean {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, inView]);

  return inView;
}