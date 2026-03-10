import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wehcppzdczkkcjvkjfru.supabase.co";
const supabaseKey = "sb_publishable_5Yf9kPSv5wJ54C-7JZuIKw_6H1gxZ1P";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
