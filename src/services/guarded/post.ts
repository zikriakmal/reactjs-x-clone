import { guardApi } from "../api.config"


const createPost = async ({ post }: { post: string }) => {
    const res = await guardApi.post('/api/v1/posts', {
        post: post
    });
    return res;

}

const getAllPost = async () => {
    const res = await guardApi.get('/api/v1/posts');
    return res;
}

export { createPost, getAllPost }