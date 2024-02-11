import { router } from "@/server/trpc";
import TechRouter from "./TechRouter";
import ThreadRouter from "./ThreadRouter";
import MessageRouter from "./MessageRouter";

export const appRouters = router({
  tech: TechRouter,
  thread: ThreadRouter,
  message: MessageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouters;
