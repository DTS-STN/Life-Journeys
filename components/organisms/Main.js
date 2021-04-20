/**
 * main element for all pages
 */

export function Main({ children }) {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
}
