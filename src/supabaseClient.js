import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mhnzakmkoisbuxvahqtl.supabase.co'; // from Settings
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1obnpha21rb2lzYnV4dmFocXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwNDY2MDksImV4cCI6MjA3NzYyMjYwOX0.JvBaY4M7sfmIuwXaEX2EM7aCMxNpETRcTYNPWyNDtag'; // from Settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
