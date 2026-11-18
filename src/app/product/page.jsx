import dynamic from "next/dynamic";
import Link from "next/link";

export default function page() {
  const Users = dynamic(() => import("@/components/Users"), {
    loading: () => <p>Loading Users...</p>,
  });
  return (
    <div>
      <h1>All Products</h1>
      <Link href="/product/1">Shirt</Link>
      <Link href="/product/2">Shoes</Link>
      <Link href="/product/3">Pants</Link>
      <Link href="/product/4">Jackets</Link>
      <Link href="/product/5">Accessories</Link>
      <Users />
    </div>
  );
}
