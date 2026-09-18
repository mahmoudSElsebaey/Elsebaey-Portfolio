import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-24 text-center min-h-[50vh] flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl md:text-6xl font-bold text-primary-1000">404</h1>
      <p className="text-xl md:text-2xl font-semibold opacity-90">
        Page Not Found
      </p>
      <p className="opacity-70 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-1000 text-white hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </section>
  );
}
