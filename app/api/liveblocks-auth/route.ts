import { Liveblocks } from "@liveblocks/node";

import { auth, currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_tzB15XIIL_ouRJmqmsce0cd-4JuHu0UZ2xhPaDGQWhMETjlH8J-7t_f9u7GUyBCO",
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: Request) {
  // Get the current user from your database
  const user = await currentUser();
  const authorization = await auth();

  if (!user || !authorization)
    return new Response("Unauthorized!!", { status: 403 });

  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });

  if (board?.orgId !== authorization.orgId)
    return new Response("Unauthorized!!");

  const userInfo = {
    name: user?.firstName || "Teammate",
    picture: user?.imageUrl || "",
  };

  const session = liveblocks.prepareSession(user?.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
  return new Response(body, { status });
}
