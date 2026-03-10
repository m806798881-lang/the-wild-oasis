import supabase from "./supabase";
function getCabins(){
const { data, error } = await supabase.from("cabins").select("*");

}
