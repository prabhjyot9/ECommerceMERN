import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
<<<<<<< HEAD
      const res = await axios.get("http://localhost:8080/api/v1/auth/admin-auth");
=======
      const res = await axios.get("/api/v1/auth/admin-auth");
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
<<<<<<< HEAD
}
=======
}
>>>>>>> a4793c23298a417d0d1f2aaf0a0245a2347ab8c7
