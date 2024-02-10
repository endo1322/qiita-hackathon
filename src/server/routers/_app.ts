import { procedure, router } from "@/server/trpc";
import { z } from "zod";
import { prisma } from "@/server/prisma";

export const appRouters = router({
  hello: procedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const findUniqueUser = await prisma.user.findMany({
        where: {
          id: input.id,
        },
      });
      return findUniqueUser;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouters;
