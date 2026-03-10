import supabase from "./supabase";
async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
}
