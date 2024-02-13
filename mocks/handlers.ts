import { products } from "@/mocks/database/products";
import { rest } from "msw";

const handlers = [
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: products, request: req }));
  }),
];

export default handlers;

// v2.2.0
// import { http, HttpResponse } from "msw";

// const handlers = [
//   http.get("/products", ({ request }) => {
//     return HttpResponse.json(
//       {
//         data: products,
//         request,
//       },
//       {
//         status: 200,
//         statusText: "SUCCESS",
//       }
//     );
//   }),
// ];
