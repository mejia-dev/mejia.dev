import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

export default function useScrollToSection(ids: readonly string[]): void {
  const location = useLocation();
  const navigate = useNavigate();
  const isFirstRun = useRef<boolean>(true);

  useEffect(() => {
    const legacyId = location.hash.slice(1);
    if (ids.includes(legacyId)) {
      navigate(`/${legacyId}`, { replace: true });
      return;
    }

    const id = location.pathname.replace(/^\/+|\/+$/g, "");
    const behavior: ScrollBehavior = isFirstRun.current ? "instant" : "auto";
    isFirstRun.current = false;
    if (ids.includes(id)) document.getElementById(id)?.scrollIntoView({ behavior });
  }, [ids, location.key, location.pathname, location.hash, navigate]);
}