import api from "@/lib/api";
import { useEffect, useState } from "react";

type User = {
  _id: string;
  username: string;
};

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api
      .get("/auth/user")
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { user, loading };
};

export default useAuth;
