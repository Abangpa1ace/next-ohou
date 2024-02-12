import { products } from "@/mocks/database/products";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/products", ({ request }) => {
    return HttpResponse.json(
      {
        data: products,
        request,
      },
      {
        status: 200,
        statusText: "SUCCESS",
      }
    );
  }),
];

export default handlers;
