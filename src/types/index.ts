export interface User {
  id: string;
  email: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface Session {
  id: string;
  user_id: string;
  refresh_token: string;
  user_agent?: string;
  ip_address?: string;
  is_revoked: boolean;
  expires_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
