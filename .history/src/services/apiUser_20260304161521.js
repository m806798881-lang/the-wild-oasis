export async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "someone@email.com",
    password: "WdAuOLCqWmqIAThffSvn",
  });
}
