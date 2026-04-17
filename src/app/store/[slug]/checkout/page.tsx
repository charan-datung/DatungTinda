// TODO: Checkout page — cart summary, buyer details form, GCash payment initiation

export default function CheckoutPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Checkout at {params.slug}</h1>
    </main>
  );
}
