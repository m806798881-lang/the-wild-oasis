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
  const imageName=`${Math.random()}-${newCabin.image.}`
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1.上传cabin数据
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    console.log(error);
    throw new Error("cabins could not created");
  }
  return data;
}
