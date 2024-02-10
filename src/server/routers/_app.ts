import { procedure, router } from "@/server/trpc";
import { z } from "zod";

export const appRouters = router({
  hello: procedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input }) => {
      return { greeting: `hello ${input.text} world` };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouters;
