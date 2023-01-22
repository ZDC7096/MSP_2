//SUPABASE
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mxjgwfqndtgclnhszmdh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14amd3ZnFuZHRnY2xuaHN6bWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzMzkwMTUsImV4cCI6MTk4OTkxNTAxNX0.Z2CUZw54_fZcxnJvVssWRStyDnqGPZqmKXrE1_9vzfQ"
const supabase = createClient(supabaseUrl, supabaseKey)
// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseKey = process.env.REACT_APP_ANON_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;