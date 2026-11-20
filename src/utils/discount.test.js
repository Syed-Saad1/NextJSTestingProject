import { test, expect } from "vitest";

import { OrderStaus, PaymentStatus } from "./discount";

test("Your Delivery APD", () => {
  const payStatus = "APD";
  const result = PaymentStatus(payStatus);
  expect(result).toBe("APD");
});

test("this Order Status NotSeen", () => {
  const OrdStatus = "NotSeen";

  const result = OrderStaus(OrdStatus);

  expect(result).toBe("NotSeen");
});
