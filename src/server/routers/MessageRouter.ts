import { z } from "zod";
import { procedure, router } from "@/server/trpc";
import { prisma } from "@/server/prisma";

const MessageRouter = router({
  create: procedure
    .input(
      z.object({
        threadId: z.number(),
        userId: z.number(),
        content: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { threadId, userId, content } = input;
      const createMessage = await prisma.message.create({
        data: {
          threadId: threadId,
          userId: userId,
          content: content,
        },
      });
      return createMessage;
    }),
});

export default MessageRouter;
