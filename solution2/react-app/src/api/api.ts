import { Council, Councillor } from '../models';
import api from './axiosInstance';

export const getCouncillorsRequest = () => {
    return api.get<Councillor[]>('/councillors?format=json');
}

export const getCouncilsRequest = () => {
    return api.get<Council[]>('/councils?format=json');
}

export const getAffairsRequest = () => {
    return api.get<Council[]>('/affairs?format=json');
}