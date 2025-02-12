import { IVideo } from "@/models/Video";

export type VideoData = Omit<IVideo, "_id">;

export type FetchOptions = {
  method?: "GET" | "POST" | "DELETE" | "PUT";
  headers?: Record<string, string>;
  body?: any;
};

class ApiClient {
  private async fetch<T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const { method = "GET", headers = {}, body } = options;
    const defaultHeader = {
      "Content-Type": "application/json",
      ...headers,
    };

    const response = await fetch(`/api${endpoint}`, {
      method,
      headers: defaultHeader,
      body: JSON.stringify(body) || undefined,
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response.json();
  }

  async getVideo(_id: string) {
    return this.fetch<IVideo>(`/videos/${_id}`);
  }

  async getVideos() {
    return this.fetch<IVideo[]>(`/videos`);
  }
  async createVideo(VideoData: VideoData) {
    return this.fetch<IVideo>(`/videos`, {
      method: "POST",
      body: VideoData,
    });
  }
}

export const apiClient = new ApiClient();
