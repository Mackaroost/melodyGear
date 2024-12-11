"use client";
import OrderCard from "@/components/admin/OrderCard";
import { OrderType } from "@/types";
import useSWR from "swr";

function PageAdmin() {
  const url = "/admin/orders/api";
  const fetcher = () => fetch(url).then((res) => res.json().then((data)=> data));
  const { data, error, isLoading } = useSWR<OrderType[]>(url, fetcher);

  if (isLoading) return <p>Cargando órdenes...</p>;
  if (error) return <p>Error al cargar las órdenes.</p>;

  return (
    <>
      <div>
        <h2>Administra tus Órdenes</h2>
      </div>

      {data && data.length ? (
        <main className="mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3">
          {data.map((item: any) => (
            <OrderCard key={item.id} order={item} />
          ))}
        </main>
      ) : (
        <h2>No hay órdenes pendientes.</h2>
      )}
    </>
  );
}

export default PageAdmin;
