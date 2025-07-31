import { useEffect } from "react";

function useDisableScroll() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden", "overscroll-none");

    return document.body.classList.remove("overflow-hidden", "overscroll-none");
  }, []);
}

export default useDisableScroll;
