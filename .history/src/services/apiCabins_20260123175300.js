import supabase from "./supabase";
import { supabaseUrl } from "../services/supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not load");
  }
  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabins could not deleted");
  }
}
export async function editCreateCabin(newCabin, id) {
  // https://wehcppzdczkkcjvkjfru.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const hasImageUrl = newCabin.image.startWith(`${supabaseUrl}`);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imageUrl = hasImageUrl
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //1.上传cabin数据
  let query = supabase.from("cabins");
  //A.add cabin数据
  // const { data, error } = await supabase
  //   .from("cabins")
  //   .insert([{ ...newCabin, image: imageUrl }])
  //   .select();

  if (!newCabin.id) query = query.insert([{ ...newCabin, image: imageUrl }]);
  //B.update cabin 数据
  if (newCabin.id)
    query = query.update({ ...newCabin, image: imageUrl }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    console.log(error);
    throw new Error(`cabins could not ${id ? "edited" : "created"}`);
  }
  //2.上传图片到storage
  if (!hasImageUrl) {
    const { error: uploadImageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);
    //3.如果图片上传错误，删除cabin数据
    if (uploadImageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.log(uploadImageError);

      throw new Error("image could not created");
    }
  }
  return data;
}
