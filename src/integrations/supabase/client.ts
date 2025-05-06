
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyohdrliebpgxuzycrov.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95b2hkcmxpZWJwZ3h1enljcm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0OTg0OTYsImV4cCI6MjA2MjA3NDQ5Nn0.eWXUxlFsJ_CZqbOrVGh-_RTIiozQkLj7CeC-95fN_GE';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    storage: window.localStorage,
    autoRefreshToken: true,
  }
});
