import { http, HttpResponse } from "msw";

const data = [];
export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json(data);
  }),
  http.post("/user", async ({ request }) => {
    const body = await request.json();
    data.push(body);
    return HttpResponse.json(data);
  }),
];
