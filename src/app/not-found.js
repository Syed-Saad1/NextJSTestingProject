import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-navy">404</h1>

      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-navy-forground transition-colors duration-300"
      >
        Back To Home
      </Link>
    </div>
  );
}
