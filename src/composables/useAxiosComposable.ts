import axios from 'axios';
import { config } from '../../config';
export default function useAxiosComposable() {

    const api = axios.create({
        baseURL: config.api_url,
        timeout: config.api_timeout,
    });

    const jsonHeader: object = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const $get = async (endpoint: string, params: object = {}) => {
        try {
            return await api.get(endpoint, {params: params});
        } catch (error) {
            throw error
        }
    };
    const  $post = async (endpoint: string, data: object = {}, headers: object = {}) => {
        try {
            return await api.post(endpoint, data, headers || jsonHeader);
        } catch (error) {
            throw {error}
        }
    };
    const $put = async (endpoint: string, data: object = {}, headers: object = {}) => {
        try {
            return await api.put(endpoint, data, headers || jsonHeader);
        } catch (error) {
            throw error
        }
    };
    const $patch = async (endpoint: string, data: object = {}, headers: object = {}) => {
        try {
            return await api.put(endpoint, data, headers || jsonHeader);
        } catch (error) {
            throw error
        }
    };
    const $delete = async (endpoint: string, data: object = {}) => {
        try {
            return await api.delete(endpoint, data);
        } catch (error) {
            throw error
        }
    };

    return {
        $get, $post, $put, $patch, $delete,
    };
}