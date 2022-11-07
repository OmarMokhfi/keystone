import type { Lists } from ".keystone/types";
import { Tag } from "./schemas/tag";
import { User } from "./schemas/user";
import { Post } from "./schemas/blog";
import { Workshop } from "./schemas/workshop";

export const lists: Lists = {
  User: User,
  Post: Post,
  Tag: Tag,
  Workshop: Workshop,
};
