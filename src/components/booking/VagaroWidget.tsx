"use client";

import { useEffect, useRef } from "react";

const VAGARO_LOADER_SRC =
  "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqE38qDp4cT3qmV35y6RuSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gevEhAJDXwOapcUbfY?v=R8VZ4DMQZyhHbuC2DdHTrDGmAgA0hKw4kLPctjRTFSs";

/**
 * Vagaro's loader resolves its target from the enclosing `.vagaro` element, so
 * the class name and inner anchors are reproduced from the supplied embed
 * verbatim. The script is appended after mount because React does not execute
 * <script> tags rendered as markup.
 */
export function VagaroWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = VAGARO_LOADER_SRC;
    script.async = true;
    container.appendChild(script);

    return () => {
      container
        .querySelectorAll("script, iframe")
        .forEach((node) => node.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="vagaro mx-auto w-[250px] max-w-full border-0 p-0 text-center [&_iframe]:w-full"
    >
      <a
        href="https://www.vagaro.com/pro/"
        className="text-sm text-ink-300 no-underline"
      >
        Powered by Vagaro
      </a>
      &nbsp;
      <a
        href="https://www.vagaro.com/pro/salon-software"
        className="text-sm text-ink-300 no-underline"
      >
        Salon Software
      </a>
      ,&nbsp;
      <a
        href="https://www.vagaro.com/pro/spa-software"
        className="text-sm text-ink-300 no-underline"
      >
        Spa Software
      </a>
      &nbsp;&amp;&nbsp;
      <a
        href="https://www.vagaro.com/pro/fitness-software"
        className="text-sm text-ink-300 no-underline"
      >
        Fitness Software
      </a>
    </div>
  );
}
