export default async function page({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Product Detailed</h1>
      <p>Product Id : {id}</p>
    </div>
  );
}
