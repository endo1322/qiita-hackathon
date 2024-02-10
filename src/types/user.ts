import { messageType } from "./message";
import { threadType } from "./thread";

export interface userType {
  id: number;
  name: string;
  mail: string;
  pass: string;
  createdAt: string;
  updatedAt: string;
  threads?: Array<threadType>;
  messages?: Array<messageType>;
}
