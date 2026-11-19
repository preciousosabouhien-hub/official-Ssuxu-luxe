"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface OrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedOptions: {
    length: string;
    laceType: string;
    density: string;
    color: string;
  };
}

interface Order {
  orderNumber: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  shippingMethod: string;
  items: OrderItem[];
  subtotal: number;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("ssuxuluxe-last-order");

    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch {
        setOrder(null);
      }
    }

    setLoading(false);
  }, []);

  const formatPrice = (price: number) =>
    `$${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  if (loading) {
    return <main className="order-success-page">Loading order...</main>;
  }

  if (!order) {
    return (
      <main className="order-success-page">
        <div className="order-not-found">
          <h1>No order found</h1>
          <p>We couldn't find a recent order confirmation.</p>

          <Link href="/shop" className="order-home-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="order-success-page">
      <div className="order-success-container">

        <div className="success-icon">✓</div>

        <p className="eyebrow">SSUXULUXE HAIR</p>

        <h1>Thank You for Your Order!</h1>

        <p className="success-message">
          Thank you for shopping with us, {order.customer.firstName}.
          Your checkout details have been received.
        </p>

        <div className="order-reference">
          <span>Order Reference</span>
          <strong>{order.orderNumber}</strong>
        </div>

        <section className="confirmation-card">
          <h2>Order Details</h2>

          {order.items.map((item, index) => (
            <div className="confirmation-item" key={`${item.id}-${index}`}>
              <Image
                src={item.image}
                alt={item.name}
                width={85}
                height={100}
              />

              <div className="confirmation-item-info">
                <h3>{item.name}</h3>

                <p>Length: {item.selectedOptions.length || "Not selected"}</p>
                <p>Lace: {item.selectedOptions.laceType || "Not selected"}</p>
                <p>Density: {item.selectedOptions.density || "Not selected"}</p>
                <p>Color: {item.selectedOptions.color || "Not selected"}</p>

                <p>Quantity: {item.quantity}</p>

                <strong>
                  {formatPrice(item.price * item.quantity)}
                </strong>
              </div>
            </div>
          ))}

          <div className="confirmation-total">
            <span>Subtotal</span>
            <strong>{formatPrice(order.subtotal)}</strong>
          </div>

          <div className="confirmation-total">
            <span>Shipping Method</span>
            <strong>{order.shippingMethod}</strong>
          </div>

          <div className="confirmation-total grand-total">
            <span>Order Total</span>
            <strong>{formatPrice(order.subtotal)}</strong>
          </div>
        </section>

        <section className="confirmation-card">
          <h2>Customer Information</h2>

          <p>
            <strong>Name:</strong>{" "}
            {order.customer.firstName} {order.customer.lastName}
          </p>

          <p>
            <strong>Email:</strong> {order.customer.email}
          </p>
        </section>

        <section className="confirmation-card">
          <h2>Delivery Address</h2>

          <p>{order.shippingAddress.address}</p>
          <p>
            {order.shippingAddress.city},{" "}
            {order.shippingAddress.state}
          </p>
          <p>{order.shippingAddress.postalCode}</p>
          <p>{order.shippingAddress.country}</p>
        </section>

        <div className="confirmation-notice">
          This is a frontend demonstration. Your order has not yet been
          submitted to a live order-management system, and no payment
          has been processed.
        </div>

        <Link href="/shop" className="order-home-button">
          Continue Shopping
        </Link>

      </div>
    </main>
  );
}