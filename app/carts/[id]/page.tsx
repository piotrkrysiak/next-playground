import ProductItem from '@/app/components/ProductItem';
import { Cart } from '@/app/ts';
import Link from 'next/link';

async function getCarts(id: number) {
  try {
    const res = await fetch(`https://dummyjson.com/carts/${id}`);
    const data: Cart = await res.json();
    return data;
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    throw new Error(errorMessage);
  }
}

export default async function CartPage({ params }: { params: { id: number } }) {
  const cart = await getCarts(params.id);
  const {
    products,
    total,
    discountedTotal,
    userId,
    totalProducts,
    totalQuantity,
  } = cart;

  return (
    <div>
      <Link href="/carts">Back</Link>
      <h1>Cart</h1>
      <h2>Total: {total}</h2>
      <h2>Discounted Total: {discountedTotal}</h2>
      <h2>User ID: {userId}</h2>
      <h2>
        Products ({totalProducts}/{totalQuantity})
      </h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          total={product.total}
          discountPercentage={product.discountPercentage}
          discountedPrice={product.discountedPrice}
        />
      ))}
    </div>
  );
}
