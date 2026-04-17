// TODO: Landing page — hero, features overview, CTA to sign up or visit a store

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-16 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-dark)]">
        Datung Tinda
      </h1>
      <p className="max-w-md text-lg text-[var(--color-text)]">
        AI-powered storefronts for Filipino sellers.
      </p>
    </main>
  );
}
