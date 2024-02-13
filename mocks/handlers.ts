import { products } from "@/mocks/database/products";
import { rest } from "msw";
import qs from "query-string";

const handlers = [
  rest.get("/products", (req, res, ctx) => {
    const {
      query: { query },
    } = qs.parseUrl(`${req.url}`);

    return res(
      ctx.status(200),
      ctx.json(
        typeof query === "string"
          ? products.filter((p) => p.title.includes(query))
          : products
      )
    );
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
