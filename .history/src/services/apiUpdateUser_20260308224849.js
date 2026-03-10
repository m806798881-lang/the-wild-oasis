import supabase from "./supabase";

export async function updateUser({ fullName, password, avatar }) {
  // 1.fullname or password
  let updateData;
  if (fullName) updateData = { data: { fullName } };
  if (password) updateData = { password };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  //2.upload avatar
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  //3.update avatar
}
