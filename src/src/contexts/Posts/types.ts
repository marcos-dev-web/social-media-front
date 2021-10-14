export interface IComment {
    id: number;
    text: string;
    postId: number;
}

export interface IPost {
    likes: number;
    id: number;
    title: string;
    content: string;
    comments: Array<IComment>;
}
export interface IContext {
    like: (postId: number) => Promise<void>;
    post: (title: string, content: string) => Promise<void>;
    comment: (content: string, postId: number) => Promise<void>;
    postList: Array<IPost>;
}
