import ProductGrid from "./components/ProductGrid";

export default async function ProductPage() {
  const res = await fetch("https://api.vercel.app/blog", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className="min-h-screen p-10 font-sans bg-[#0f172a] text-white">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">Product Catalog</h1>
      <ProductGrid posts={posts} />
    </div>
  );
}
