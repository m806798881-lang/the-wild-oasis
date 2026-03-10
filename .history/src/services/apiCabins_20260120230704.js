import supabase from "./supabase";
async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not load");
  }
}
