import { threadType } from "./thread";
import { userType } from "./user";

export interface messageType {
  id: number;
  threadId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user?: userType;
}

export interface messageFormType {
  threadId: number;
  userId: 1322;
  content: string;
}
