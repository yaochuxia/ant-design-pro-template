import { stringify } from 'qs';
import request from '../utils/request';



export async function fakeChartData() {
    return request('/api/fakeChartData');
}
