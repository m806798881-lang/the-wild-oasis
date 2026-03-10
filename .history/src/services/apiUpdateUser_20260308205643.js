import supabase from "./supabase";

export async function updateUser({ fullName, password, avatar }) {
  const { data, error } = await supabase.auth.updateUser({
    password
    data: { hello: "world" },
  });
}
