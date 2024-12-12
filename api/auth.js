import { supabase } from '../config';

export default async function handler(req, res) {
  const { username, password } = req.body;

  const { data, error } = await supabase
    .from('admin')
    .select('*')
    .eq('username', username)
    .eq('password', password);

  if (error || data.length === 0) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.status(200).json({ success: true });
}
