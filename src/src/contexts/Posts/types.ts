
export interface Comment {
    id: number;
    text: string;
    postId: number;
}

export interface Post {
    likes: number;
    id: number;
    title: string;
    content: string;
    comments: Array<Comment>;
}

export interface Context {
    like: (postId: number) => Promise<void>;
    post: (title: string, content: string) => Promise<void>;
    comment: (content: string, postId: number) => Promise<void>;
    postList: Array<Post>;
}
