import { useEffect, useState } from "react";
import { fetchRandomUser } from "./services/userService";
import UserCard from "./component/userCard";
import type { User } from "./types/user";
import { RefreshCw } from "lucide-react";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUser = async () => {
    setLoading(true);
    const newUser = await fetchRandomUser();
    setUser(newUser);
    setLoading(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("randomUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      loadUser();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <header className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
          Random User
        </h1>
        <p className="text-muted-foreground text-lg max-w-md">
          Fetching random user profiles from the web
        </p>
      </header>
      {user && <UserCard user={user} />}
      <button
        onClick={loadUser}
        className="mt-6 flex gap-2 justify-center items-center px-6 py-3 bg-purple-700  text-white rounded-lg hover:bg-purple-600 transition"
      >
        <RefreshCw
          className={`h-4 w-4 text-center ${
            loading ? "animate-spin-slow" : ""
          }`}
        />
        {loading ? "Fetching New User..." : "Get New User"}
      </button>
    </div>
  );
};

export default App;
