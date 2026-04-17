// TODO: Product detail/edit — image upload with AI description generation, pricing, inventory

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Product {params.id}</h1>
    </main>
  );
}
