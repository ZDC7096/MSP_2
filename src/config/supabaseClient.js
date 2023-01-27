//SUPABASE
import { createClient } from '@supabase/supabase-js'

//CONNECTS TO SUPABASE
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

 export default supabase;