import { useEffect, useRef } from "react";

export default function useClickOutside(onClick, listenCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          onClick();
        }
      }

      document.addEventListener("click", handleClick, listenCapture);
      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [onClick, listenCapture]
  );
  return ref;
}
