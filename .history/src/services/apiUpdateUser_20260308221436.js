import supabase from "./supabase";

export async function updateUser({ fullName, password, avatar }) {
  let updateData;
  if (fullName) updateData;

  const { data, error } = await supabase.auth.updateUser({
    email: "new@email.com",
    password: "new-password",
    data: { hello: "world" },
  });
}
