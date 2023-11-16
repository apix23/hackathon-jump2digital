import { useQuery } from '@tanstack/react-query';
import { API } from '../../services/networking/api';

export default function useQuestion() {
    return useQuery({
        queryFn: async () => {
            return await API<{message: string}>('ask');
        },
        queryKey: ['ask']
    })
}