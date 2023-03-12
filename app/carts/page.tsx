import CartItem from '@/app/components/CartItem';
import { RootObject } from '@/app/ts';

async function getCarts() {
  try {
    const res = await fetch('https://dummyjson.com/cart');
    const data: RootObject = await res.json();
    return data.carts;
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    throw new Error(errorMessage);
  }
}

export default async function CartsPage() {
  const carts = await getCarts();

  return (
    <div>
      {carts.map((cart) => (
        <CartItem
          key={cart.id}
          products={cart.products}
          total={cart.total}
          discountedTotal={cart.discountedTotal}
          userId={cart.userId}
          totalProducts={cart.totalProducts}
          totalQuantity={cart.totalQuantity}
        />
      ))}
    </div>
  );
}
