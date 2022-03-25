import { useState, useEffect, FC } from "react";
import { Chat } from "../../components/Chat";
import { Loading } from "../../components/Loading";
import { Login } from "../../components/Login";

import { auth, signInWithGoogle, signOut } from "../../services/firebase";

export const MainPage: FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (user == null) {
    return <Login authProvider={signInWithGoogle} />;
  } else {
    return <Chat user={user} signOut={signOut} />;
  }
};

export default MainPage;
