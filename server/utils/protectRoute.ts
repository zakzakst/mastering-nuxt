import { H3Event } from "h3";

export default async (event: H3Event) => {
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }

  const hasAccess = await $fetch("/api/user/hasAccess", {
    headers: {
      cookie: getHeader(event, "cookie"),
    },
  });

  if (!hasAccess) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }
};
