"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Comments = ({ comments }: { comments: CommentWithAuthor[] }) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const deleteComment = async (id: string) => {
    await supabase.from("comments").delete().match({
      id: id,
    });
    router.refresh();
  };

  return comments?.map((comment) => (
    <div key={comment.id}>
      <p>{comment.author.name}</p>
      <p>{comment.text}</p>
      <button onClick={() => deleteComment(comment.id)}>Delete</button>
    </div>
  ));
};

export default Comments;
