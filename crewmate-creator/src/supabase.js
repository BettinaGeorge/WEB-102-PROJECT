import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ukvurwizvsdhsrydecqd.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrdnVyd2l6dnNkaHNyeWRlY3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMjc3ODQsImV4cCI6MjA2MDYwMzc4NH0.OdUsmHzVEGr1jVLxH-J3oY113E3Yac2tkYfwlCma3Sg'

export const supabase = createClient(supabaseUrl, supabaseKey)
