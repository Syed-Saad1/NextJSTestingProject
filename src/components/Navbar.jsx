import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex flex-col w-full">
      <div className="bg-black px-5 py-3 flex justify-between items-center">
        <p className="text-xs text-muted">Welcome! to Decent Outfits</p>
        <p className="text-xs text-muted ">
          First Order 10% Off For Every Customer
        </p>
        <p className="text-xs text-muted">
          30Days Easy Returns and Money Back Guarantee
        </p>
      </div>
      <nav className="flex px-4 justify-between items-center bg-muted  ">
        <div className="flex items-center flex-col ">
          <h1 className="text-4xl font-extrabold ">Decent</h1>
          <p className="text-xl font-semibold text-muted-foreground">
            Outfits
          </p>{" "}
        </div>
        <div className="flex space-x-4 text-sm font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
          <Link href="/users">Users</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
