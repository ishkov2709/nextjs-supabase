import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import AuthButton from "./components/auth-button-server";
import NewComment from "./components/new-comment";
import Comments from "./components/comments";

export default async function Home() {
  const superbase = createServerComponentClient<Database>({ cookies });
  const { data } = await superbase
    .from("comments")
    .select("*, author: profiles(*)")
    .order("created_at", { ascending: false });
  const {
    data: { session },
  } = await superbase.auth.getSession();

  return (
    <main className={styles.main}>
      <AuthButton />
      {session && <NewComment />}
      <Comments comments={data} />
    </main>
  );
}
