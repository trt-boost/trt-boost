"use client";

import { useEffect, useRef, useState } from "react";

const LOADER_SRC =
  "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqqE38qDp4cT3qmV35y6RuSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gevEhAJDXwOapcUbfY?v=R8VZ4DMQZyhHbuC2DdHTrDGmAgA0hKw4kLPctjRTFSs#";

/**
 * Vagaro's loader replaces the surrounding `.vagaro` element from its own
 * position in the document, so it only mounts when it executes during parse.
 * React appends scripts after mount, where the loader initialises but never
 * renders — so the embed is served verbatim inside a srcdoc document instead.
 */
const EMBED_DOCUMENT = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
html,body{margin:0;padding:0;background:transparent;font-family:Arial,Helvetica,sans-serif;}
.vagaro a{font-size:14px;color:#AAA;text-decoration:none;}
</style>
</head>
<body>
<div class="vagaro" style="padding:0; border:0; margin:0 auto; text-align:center;"><a href="https://www.vagaro.com/pro/" target="_blank" rel="noopener">Powered by Vagaro</a>&nbsp;<a href="https://www.vagaro.com/pro/salon-software" target="_blank" rel="noopener">Salon Software</a>,&nbsp;<a href="https://www.vagaro.com/pro/spa-software" target="_blank" rel="noopener">Spa Software</a>&nbsp;&amp;&nbsp;<a href="https://www.vagaro.com/pro/fitness-software" target="_blank" rel="noopener">Fitness Software</a><script type="text/javascript" src="${LOADER_SRC}"><\/script></div>
</body>
</html>`;

const MIN_HEIGHT = 700;

export function VagaroWidget() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let observer: ResizeObserver | undefined;

    const attach = () => {
      const doc = frame.contentDocument;
      if (!doc?.body) return;

      const measure = () => {
        const measured = Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight,
        );
        if (measured > 0) setHeight(Math.max(measured, MIN_HEIGHT));
      };

      observer?.disconnect();
      observer = new ResizeObserver(measure);
      observer.observe(doc.body);
      observer.observe(doc.documentElement);
      measure();
    };

    frame.addEventListener("load", attach);
    attach();

    return () => {
      observer?.disconnect();
      frame.removeEventListener("load", attach);
    };
  }, []);

  return (
    <iframe
      ref={frameRef}
      srcDoc={EMBED_DOCUMENT}
      title="Book an appointment with TRT Boost"
      loading="lazy"
      scrolling="no"
      style={{ height }}
      className="w-full border-0"
    />
  );
}
