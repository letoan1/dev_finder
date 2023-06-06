export interface IInfoUserResponse {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  created_at: string;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  location: string;
  name: string;
  company: string | null;
  html_url: string;
}
