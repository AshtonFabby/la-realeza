import { Paynow } from "paynow";

export const makePayment = () => {
  const paynow = new Paynow(
    process.env.INTERRATION_ID,
    process.env.INTERRATION_KEY
  );
  paynow.resultUrl = "http://example.com/gateways/paynow/update";
  paynow.returnUrl = "http://example.com/return?gateway=paynow";
  let payment = paynow.createPayment("Invoice 35");
  payment.add("Bananas", 2.5);
  paynow.send(payment);


};
