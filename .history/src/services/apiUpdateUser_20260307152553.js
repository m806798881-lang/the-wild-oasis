import supabase from "./supabase";

export async function updateUser({}) {
  const { data, error } = await supabase.auth.updateUser({
    email: "new@email.com",
    password: "new-password",
    data: { hello: "world" },
  });
}
