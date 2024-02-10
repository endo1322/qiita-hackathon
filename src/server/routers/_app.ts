import { router } from "@/server/trpc";
import TechRouter from "./TechRouter";
import ThreadRouter from "./ThreadRouter";

export const appRouters = router({
  tech: TechRouter,
  thread: ThreadRouter,
});

// export type definition of API
export type AppRouter = typeof appRouters;
