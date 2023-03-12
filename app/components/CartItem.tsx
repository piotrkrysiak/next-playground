import ProductItem from '@/app/components/ProductItem';
import { Cart } from '@/app/ts';
import Link from 'next/link';

export default function CartItem({
  id,
  products,
  total,
  discountedTotal,
  userId,
  totalProducts,
  totalQuantity,
}: Cart) {
  return (
    <Link href="/carts/[id]" as={`/carts/${id}`}>
      <h1 className="bg-white xxs:bg-blue-500 xs:bg-white sm:bg-black md:bg-white lg:bg-black xl:bg-white">
        Cart
      </h1>
      <h2>Products</h2>
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
      <h2>Total: {total}</h2>
      <h2>Discounted Total: {discountedTotal}</h2>
      <h2>User ID: {userId}</h2>
      <h2>Total Products: {totalProducts}</h2>
      <h2>Total Quantity: {totalQuantity}</h2>
    </Link>
  );
}
