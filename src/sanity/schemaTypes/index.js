import { blockContent } from "./blockContent";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { event } from "./event";

export const schema = {
  types: [blockContent, categoryType, postType, authorType, event],
};
