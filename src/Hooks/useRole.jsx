import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading : roleLoading, data } = useQuery({
    queryKey: ['user-role', user?.email],
    enabled: !!user?.email, // ✅ prevents early undefined call
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data; // { role: "admin" }
    }
  });

  return { role: data?.role || 'user', roleLoading };
};

export default useRole;
