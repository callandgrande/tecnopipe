import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabaseUrl = 'https://jzjxxgwgmaogydcqahbc.supabase.co';
const supabaseKey = PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
