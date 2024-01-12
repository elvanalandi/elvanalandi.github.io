import axios, { AxiosResponse } from "axios";
import { UserData } from "@/constants";

export interface Repo {
  name: string;
  description: string;
  html_url: string;
}

const getLatestRepos = async (): Promise<Repo[]> => {
    try {
      const username = UserData.githubUsername;
      const token = UserData.token;

      if (token) {
        const res: AxiosResponse = await axios.get(
          `https://api.github.com/search/repositories?q=user:${username}&sort=updated&direction=desc`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        let repos: Repo[] = res.data.items;
        let latestFourRepos: Repo[] = repos.splice(0, 4);
        return latestFourRepos;
      } else {
        const res: AxiosResponse = await axios.get(
          `https://api.github.com/search/repositories?q=user:${username}&sort=updated&direction=desc`
        );
        let repos: Repo[] = res.data.items;
        let latestFourRepos: Repo[] = repos.splice(0, 4);
        return latestFourRepos;
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  };

export default getLatestRepos;
