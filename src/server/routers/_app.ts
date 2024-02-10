import { procedure, router } from "@/server/trpc";
import { z } from "zod";
import { prisma } from "@/server/prisma";
import TechRouter from "./TechRouter";

export const appRouters = router({
  tech: TechRouter,
});

// export type definition of API
export type AppRouter = typeof appRouters;
