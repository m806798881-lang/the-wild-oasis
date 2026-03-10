import supabase from "./supabase";

export async function updateUser({ fullName, password, avatar }) {
  const { data, error } = await supabase.auth.updateUser({
    password,
    data: { fullName, avatar },
  });
  if (error) throw new Error(error.message);
  return data;
}
