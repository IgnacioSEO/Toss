let a = {
  mId: "tosspayments",
  version: "2022-11-16",
  paymentKey: "IzvuTLs9NKLMvb-dKLii_",
  lastTransactionKey: "4A8AAD55C0DFC0F11B3BF7C7C96E2439",
  orderId: "CcGGDTkxOc4duusoGVmJ0",
  orderName: "토스 티셔츠 외 2건",
  status: "DONE",
  requestedAt: "2022-08-17T15:38:47+09:00",
  approvedAt: "2022-08-17T15:39:14+09:00",
  useEscrow: false,
  cultureExpense: false,
  card: null,
  virtualAccount: null,
  transfer: null,
  mobilePhone: null,
  giftCertificate: null,
  cashReceipt: null,
  discount: null,
  cancels: null,
  secret: null,
  type: "NORMAL",
  easyPay: {
    provider: "토스페이",
    amount: 15000,
    discountAmount: 0,
  },
  country: "KR",
  failure: null,
  isPartialCancelable: true,
  receipt: {
    url: "https://dashboard.tosspayments.com/sales-slip?transactionId=cno3Idq53AKHoXP%2BJnAWt70lTLYJHVytjcCu%2FhEIUd56LAMEmBlJ9FWaQinp0uZ1&ref=PX",
  },
  checkout: {
    url: "https://api.tosspayments.com/v1/payments/IzvuTLs9NKLMvb-dKLii_/checkout",
  },
  currency: "KRW",
  totalAmount: 15000,
  balanceAmount: 15000,
  suppliedAmount: 13636,
  vat: 1364,
  taxFreeAmount: 0,
  method: "간편결제",
};
const { easyPay, orderId, orderName } = a;
// let b, c;
// ({b, c} = { orderId: a.orderId, c: a.orderName })
orderId;
orderName;
a.orderId;
