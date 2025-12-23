import { useEffect, useState } from "react";
import { fetchRandomUser } from "./services/userService";
import UserCard from "./components/UserCard";
import ErrorCard from "./components/ErrorCard";
import type { User } from "./types/user";
import { RefreshCw } from "lucide-react";
import {
  DISCOVER_MESSAGE,
  EXPLORE_MESSAGE,
  RANDOM_USER_MESSAGE,
} from "./constants/message";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async () => {
    setLoading(true);
    try {
      const newUser = await fetchRandomUser();
      setUser(newUser);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
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
        <div className="inline-block mb-4">
          <span className="px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-teal-500 bg-teal-500/10 rounded-full border border-teal-500/20">
            {DISCOVER_MESSAGE}
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4  bg-clip-text">
          {RANDOM_USER_MESSAGE}
        </h1>
        <p className="text-gray-500/80 text-lg max-w-md mx-auto leading-relaxed">
          {EXPLORE_MESSAGE}
        </p>
      </header>
      {error ? (
        <ErrorCard message={error} onRetry={loadUser} />
      ) : (
        user && <UserCard user={user} />
      )}

      {!error && (
        <button
          onClick={loadUser}
          className={`${
            loading
              ? "bg-teal-700 opacity-50 cursor-not-allowed "
              : "bg-teal-700 hover:bg-teal-600 cursor-pointer"
          } mt-6 flex gap-2  justify-center items-center px-6 py-3 bg-teal-700 text-white rounded-lg  transition`}
        >
          <RefreshCw
            className={`h-4 w-4 text-center ${
              loading ? "animate-spin-slow" : ""
            }`}
          />
          {loading ? "Fetching..." : "Get New User"}
        </button>
      )}
    </div>
  );
};

export default App;
