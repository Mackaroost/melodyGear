import { type OrderType } from "@/types";
import { updateOrder } from "@/actions/update-order-action";

interface OrderPropsAdmin {
  order: OrderType;
}

export default function OrderCard({ order }: OrderPropsAdmin) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="flex flex-col justify-between rounded-lg bg-gray-50 p-4 sm:p-6 lg:p-8 space-y-4 min-h-[400px]"
    >
      <div className="flex-1 space-y-4 overflow-hidden">
        <p className="font-semibold text-gray-900 truncate">
          Cliente: {order.name}
        </p>
        <p className=" text-gray-700 truncate">Email: {order.email}</p>
        <p className=" text-gray-700 truncate">Teléfono: {order.telephone}</p>

        <div className="mt-4">
          {
            order.OrderProduct.map((item) => (
             <div key={item.id}>
               <p className=" text-gray-700 truncate">
                Productos: {item.product.name}
               </p>
               <p className=" text-gray-700 truncate my-4">
                Cantidad: {item.quantity}
               </p>
             </div>
          ))
          }
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className=" font-medium text-gray-900">Total a Pagar:</dt>
        <dd className=" font-medium text-gray-900">${order.total}</dd>
      </div>

      <form action={updateOrder} className="mt-4">
        <input 
        className="hidden"
        name="orderId" 
        value={order.id} />

        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full p-3 rounded uppercase font-bold cursor-pointer"
          value="Completada"
        />
      </form>
    </section>
  );
}
