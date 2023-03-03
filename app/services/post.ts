import {API_URL} from "@/app/services/index";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export async function getAllPosts(): Promise<Post[]> {
    const response = await fetch(`${API_URL}posts`)
    return await response.json()
}

export async function getOnePosts(id: number): Promise<Post> {
    const response = await fetch(`${API_URL}posts/${id}`)
    return response.json()
}