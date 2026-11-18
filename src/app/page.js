import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Welcome to My Website</h1>

      <Link href="/about" className="mt-5 inline-block text-blue-600">
        Visit About Page
      </Link>
    </main>
  );
}
