"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const AuthButton = ({ session }: { session: any }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const onLogIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const onLogOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      {!session && <button onClick={onLogIn}>Log In</button>}
      {session && <button onClick={onLogOut}>Log Out</button>}
    </>
  );
};

export default AuthButton;
