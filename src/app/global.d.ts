import { Database as DB } from "../../lib/database.types";

type CommentRow = DB["public"]["Tables"]["comments"]["Row"];
type Profile = DB["public"]["Tables"]["profiles"]["Row"];

declare global {
  type Database = DB;
  type CommentWithAuthor = CommentRow & {
    author: Profile;
  };
}
