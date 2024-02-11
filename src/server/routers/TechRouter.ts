import { z } from "zod";
import { procedure, router } from "@/server/trpc";
import { prisma } from "@/server/prisma";

const TechRouter = router({
  findUniqueByName: procedure
    .input(z.object({ name: z.string(), isThreads: z.boolean() }))
    .query(async ({ input }) => {
      const findUniqueTech = await prisma.tech.findUnique({
        where: {
          name: input.name,
        },
        include: {
          threads: input.isThreads,
        },
      });
      return findUniqueTech;
    }),
});

export default TechRouter;
