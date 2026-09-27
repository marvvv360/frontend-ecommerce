import { Suspense } from 'react';
import { cookies } from 'next/headers';

async function getOrders() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const res = await fetch('http://127.0.0.1:8000/api/orders', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Error al cargar el historial de órdenes');
  const data = await res.json();
  return data.data || data;
}

async function OrdersList() {
  const orders = await getOrders();

  if (orders.length === 0) {
    return <p className="text-gray-600">Aún no tienes compras realizadas.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map((order: any) => (
        <div key={order.id} className="border p-4 rounded-lg bg-white shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="font-bold">Orden #{order.id}</span>
            <span className="text-green-600 font-semibold uppercase text-sm">{order.status || 'Completado'}</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">Fecha: {order.created_at || 'Reciente'}</p>
          <p className="text-lg font-bold text-blue-600">Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
}

export default function OrdersPage() {
  return (
    <main className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Historial de Compras</h1>
      <Suspense fallback={<p className="text-center py-10">Cargando tus órdenes...</p>}>
        <OrdersList />
      </Suspense>
    </main>
  );
}