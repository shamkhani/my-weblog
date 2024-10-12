export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    date: string;
  }
  
  export interface RootState {
    posts: {
      posts: Post[];
      loading: boolean;
      error: string | null;
    };
    theme: {
      theme: 'light' | 'dark';
    };
  }
  