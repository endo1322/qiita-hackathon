import { z } from "zod";
import { procedure, router } from "@/server/trpc";
import { prisma } from "@/server/prisma";

const ThreadRouter = router({
  findUniqueById: procedure
    .input(
      z.object({ id: z.number(), isMessages: z.boolean(), isUser: z.boolean() })
    )
    .query(async ({ input }) => {
      const uniqueThread = await prisma.thread.findUnique({
        where: {
          id: input.id,
        },
        include: {
          messages: input.isMessages
            ? {
                include: {
                  user: input.isUser,
                },
              }
            : false,
        },
      });
      return uniqueThread;
    }),
  create: procedure
    .input(
      z.object({ techId: z.number(), userId: z.number(), name: z.string() })
    )
    .mutation(async ({ input }) => {
      const { techId, userId, name } = input;
      const createCompany = await prisma.thread.create({
        data: {
          techId: techId,
          userId: userId,
          name: name,
        },
      });
      return createCompany;
    }),
});

export default ThreadRouter;
