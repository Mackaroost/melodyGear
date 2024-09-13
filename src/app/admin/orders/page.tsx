import OrderCard from '@/app/products/components/admin/OrderCard';
import { prisma } from '@/lib/prisma';

async function getOrders() {
  const resp = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      OrderProduct: {
        include: {
          product: true,
        },
      },
    },
  });
  return resp;
}

async function PageAdmin() {
  const orders = await getOrders();

  return (
    <>
      <div>
        <h2>Administra tus Ordenes</h2>
      </div>
      <main className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 ">
        {orders.length ? (
          orders.map((item) => <OrderCard key={item.id} order ={item} />)
        ) : (
          <p>No hay órdenes pendientes.</p>
        )}
      </main>
    </>
  );
}

export default PageAdmin;
