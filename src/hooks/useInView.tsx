import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLDivElement>(
  { threshold = 0, root = null, rootMargin = "0px 0px -32px 0px" }: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(element); // Animate only once
      }
    }, { threshold, root, rootMargin });

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return { ref, inView };
}
