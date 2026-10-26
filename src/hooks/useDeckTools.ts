import { useCallback, useEffect, useRef, useState } from "react";

/* ————— Timer presentasi ————— */
export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const toggle = useCallback(() => setRunning((r) => !r), []);
  const reset = useCallback(() => setSeconds(0), []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return { label: `${mm}:${ss}`, running, toggle, reset };
}

/* ————— Mode layar penuh ————— */
export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggle = useCallback(() => {
    try {
      if (document.fullscreenElement) {
        void document.exitFullscreen();
      } else {
        void document.documentElement.requestFullscreen();
      }
    } catch {
      /* abaikan jika tidak didukung */
    }
  }, []);

  return { isFullscreen, toggle };
}

/* ————— Navigasi keyboard ————— */
export function useDeckKeyboard(handlers: {
  next: () => void;
  prev: () => void;
  first: () => void;
  last: () => void;
  fullscreen: () => void;
  print: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          handlers.next();
          break;
        case " ": {
          const onButton =
            e.target instanceof HTMLElement && e.target.closest("button");
          if (!onButton) {
            e.preventDefault();
            handlers.next();
          }
          break;
        }
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          handlers.prev();
          break;
        case "Home":
          e.preventDefault();
          handlers.first();
          break;
        case "End":
          e.preventDefault();
          handlers.last();
          break;
        case "f":
        case "F":
          handlers.fullscreen();
          break;
        case "p":
        case "P":
          handlers.print();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlers]);
}

/* ————— Navigasi geser (swipe) ————— */
export function useSwipe(handlers: { next: () => void; prev: () => void }) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (startX.current === null || startY.current === null) return;
      const dx = e.changedTouches[0].clientX - startX.current;
      const dy = e.changedTouches[0].clientY - startY.current;
      startX.current = null;
      startY.current = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        if (dx < 0) handlers.next();
        else handlers.prev();
      }
    },
    [handlers]
  );

  return { onTouchStart, onTouchEnd };
}
