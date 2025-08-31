import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";

export default async function Home() {
  let allProducts = [];

  try {
    allProducts = await db.select().from(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Leather Bags
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of handcrafted leather bags, designed for style and durability.
            Each piece is made with premium materials and attention to detail.
          </p>
        </div>

        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products available. Please check back later or ensure the database is properly seeded.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
