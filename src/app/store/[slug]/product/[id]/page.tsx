// TODO: Public product detail — images gallery, description, add-to-cart, related products

export default function StoreProductPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Product {params.id} at {params.slug}
      </h1>
    </main>
  );
}
