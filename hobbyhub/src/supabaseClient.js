import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cratkfwxdnpsyewvciqg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyYXRrZnd4ZG5wc3lld3ZjaXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MDY3MzAsImV4cCI6MjA2MTE4MjczMH0.Wfq5Cy1kAoyDI971EYDI_6CRLWf5HqNcUb1aFqUXrck"
);
