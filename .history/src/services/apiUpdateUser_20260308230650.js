import supabase, { supabaseUrl } from "./supabase";

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
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (uploadError) throw new Error(uploadError.message);

  //3.update avatar
  const { data: data2, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error) throw new Error(error.message);
}
