import { Suspense } from 'react';
import Link from 'next/link';

async function getProducts() {
  const res = await fetch('http://127.0.0.1:8000/api/products', {
    cache: 'no-store', // O usa revalidate según prefieras
  });
  if (!res.ok) throw new Error('Error al cargar productos');
  return res.json();
}

async function ProductList() {
  const data = await getProducts();
  const products = data.data || data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <Link 
            href={`/catalog/${product.id}`}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ver Detalle
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Productos</h1>
      <Suspense fallback={<p className="text-center py-10">Cargando productos de forma asíncrona...</p>}>
        <ProductList />
      </Suspense>
    </main>
  );
}