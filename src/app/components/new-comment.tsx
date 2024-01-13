import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const NewComment = () => {
  const addComment = async (formData: FormData) => {
    "use server";
    const comment = String(formData.get("comment"));

    const supabase = createServerActionClient({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("comments").insert({
        text: comment,
        user_id: user.id,
      });

      revalidatePath("/");
    }
  };

  return (
    <form action={addComment}>
      <label>
        <input type="text" name="comment" />
      </label>
    </form>
  );
};

export default NewComment;
