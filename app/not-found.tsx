import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <div>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or moved.</p>
        <Link className="btn-primary" href="/">Back to home</Link>
      </div>
    </main>
  );
}
