import { Suspense } from "react";

export default function page({ params }) {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Product Detailed</h1>
      <p>Product Id : {id}</p>
    </div>
  );
}
