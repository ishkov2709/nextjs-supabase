import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import AuthButton from "./components/auth-button-server";
import NewComment from "./components/new-comment";

export default async function Home() {
  const superbase = createServerComponentClient({ cookies });
  const { data } = await superbase
    .from("comments")
    .select("*, profiles(*)")
    .order("created_at", { ascending: false });
  const {
    data: { session },
  } = await superbase.auth.getSession();

  return (
    <main className={styles.main}>
      <AuthButton />
      {session && <NewComment />}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
