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

    return categoryMapper[category]
      ? HttpResponse.json(categoryMapper[category])
      : HttpResponse.json([]);
  }),
];
