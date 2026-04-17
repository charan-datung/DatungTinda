// TODO: Public storefront — displays seller's products, branding, and store info by slug

export default function StorePage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Store: {params.slug}</h1>
    </main>
  );
}
