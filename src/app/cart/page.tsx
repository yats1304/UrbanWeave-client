import { Suspense } from "react";
import CartClient from "./CartClient";

export default function CartPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading cart…</div>}>
      <CartClient />
    </Suspense>
  );
}
