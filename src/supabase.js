import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://eeinppookgyyalymocau.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaW5wcG9va2d5eWFseW1vY2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3MjIwNDcsImV4cCI6MTk5MjI5ODA0N30.mGz4CQJxbG3EbifqysPEj2uX0tp7S1H7lPdEjm9VWpk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
