import { http, HttpResponse } from "msw";
import albumResponse from "./album/albumList.json" assert { type: "json" };

const apiBaseUrl = import.meta.env.API_BASE_URL;

const categoryMapper = {
  2: albumResponse,
};

export const handlers = [
  http.get(`${apiBaseUrl}/posts`, ({ request }) => {
    const url = new URL(request.url);

    const category = url.searchParams.get("categories");
    const page = Number(url.searchParams.get("page") ?? 1);
    const perPage = Number(url.searchParams.get("per_page") ?? 10);

    const allData = categoryMapper[category];
    if (!allData) return HttpResponse.json([]);

    const total = allData.length;
    const totalPages = Math.ceil(total / perPage);
    const start = (page - 1) * perPage;
    const pageData = allData.slice(start, start + perPage);

    return HttpResponse.json(pageData, {
      headers: {
        "x-wp-total": total.toString(),
        "x-wp-totalpages": totalPages.toString(),
      },
    });
  }),
];
