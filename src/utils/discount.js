export function PaymentStatus(payStatus) {
  if (payStatus === "APD") {
    return payStatus;
  } else {
    console.log("You're payStatus Not Valid");
  }
}
export function OrderStaus(OrdStatus) {
  if (OrdStatus === "NotSeen") {
    return OrdStatus;
  }
}
