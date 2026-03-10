import supabase from "./supabase";

export async function updateUser({ fullName, password, avatar }) {
  let updateData;
  if (fullName) updateData = { data: { fullName } };
  if (password) updateData = { password };

  const { data, error } = await supabase.auth.updateUser(updateData);
}
