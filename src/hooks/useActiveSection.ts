import { RefObject, useEffect, useState } from "react";

export default function useActiveSection<T extends string>(ids: readonly T[], scrollerRef: RefObject<HTMLElement | null>): T {
  const [active, setActive] = useState<T>(ids[0]);

  useEffect(() => {
    const scroller = scrollerRef.current;

    function update(): void {
      const scrolling = scroller !== null && getComputedStyle(scroller).overflowY === "auto";
      let atBottom: boolean;
      let top: number;
      let height: number;

      if (scrolling && scroller) {
        const rect = scroller.getBoundingClientRect();
        const overflows = scroller.scrollHeight > scroller.clientHeight + 4;
        atBottom = overflows && scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4;
        top = rect.top;
        height = rect.height;
      } else {
        const overflows = document.documentElement.scrollHeight > window.innerHeight + 4;
        atBottom = overflows && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        top = 0;
        height = window.innerHeight;
      }

      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const marker = top + height * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= marker) current = id;
      }
      setActive(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    scroller?.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      scroller?.removeEventListener("scroll", update);
    };
  }, [ids, scrollerRef]);

  return active;
}