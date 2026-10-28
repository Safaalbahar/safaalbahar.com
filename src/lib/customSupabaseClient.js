import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ndeqydjszwxijssusewc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZXF5ZGpzend4aWpzc3VzZXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNjE4NDUsImV4cCI6MjA4NjgzNzg0NX0.gKJAEn0zoq4EhgFuFpWNXqBNScVZ-Z-cR5lVRWcb82w';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
