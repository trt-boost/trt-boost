/**
 * Renders a JSON-LD <script> for rich results in search engines.
 * Server component — emits structured data into the page.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (no user input); kept minimal.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
