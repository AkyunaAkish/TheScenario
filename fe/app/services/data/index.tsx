import axios from "axios";
import type { Data } from "@/app/context/DataContext";
const API_URL = "http://127.0.01:3000/data";

export const getData = async (): Promise<Data[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const createData = async (data: string) => {
    const response = await axios.post(API_URL, { data: data });
    return response.data;
}

export const updateData = async (id: string, updatedValue: string) => {
    const response = await axios.put(`${API_URL}/${id}/`, { data: updatedValue });
    return response.data;
}

export const deleteData = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}/`);
    return response.data;
}