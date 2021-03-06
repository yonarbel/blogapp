import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_LINTERS = 'fetch_linters';
const ROOT_URL = "/api/v1";
const API_KEY = '?key=YONATANARBEL1234'


/*export function fetchPosts(linter) {
 const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
 return {
 type: FETCH_POSTS,
 payload : request
 }


 }*/
//http://localhost:3000goimports
export function fetchPosts(linter, page = 1) {
    const request = axios.get(`${ROOT_URL}/entries?linter=${linter}&page=${page}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }


}
export function fetchLinters() {
    const request = axios.get(`${ROOT_URL}/totals`);
    return {
        type: FETCH_LINTERS,
        payload: request
    }
}