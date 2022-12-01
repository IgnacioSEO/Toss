const tossService = require("../services/tossService");

import { loadTossPayments } from "@tosspayments/payment-sdk";
const clientKey = "test_ck_k6bJXmgo28e2DRdXN6w3LAnGKWx4";

async function main() {
  const tossPayments = await loadTossPayments(clientKey);
}
