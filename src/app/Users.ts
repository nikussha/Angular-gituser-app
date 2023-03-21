export interface User {
  name: string;
  login: string;
  created_at: number | string;
  id: number;
  avatar_url: any;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
  twitter_username: string | null;
  bio: string | null;
}
