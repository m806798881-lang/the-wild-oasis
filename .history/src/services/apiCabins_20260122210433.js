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
export async function createCabin(newCabin) {
  // https://wehcppzdczkkcjvkjfru.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name.replace("/", "")}`;
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1.上传cabin数据
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imageUrl }])
    .select();
  if (error) {
    console.log(error);
    throw new Error("cabins could not created");
  }
  //2.上传图片到storage
  const { error: uploadImageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3.如果图片上传错误，删除cabin数据
  if (uploadImageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(uploadImageError);

    throw new Error("image could not created");
  }
  return data;
}
