import { Councillor } from '../models';
import api from './axiosInstance';

export const getCouncillorsRequest = () => {
    return api.get<Councillor[]>('/councillors?format=json');
}