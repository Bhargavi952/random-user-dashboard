import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { Mail, UserRound } from "lucide-react";

interface Props {
  user: User;
}

const colors = ["bg-purple-500", "bg-purple-400", "bg-purple-300"];

const UserCard = ({ user }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [user.image]);

  const firstLetter = user.fullName.charAt(0).toUpperCase();
  const color = colors[user.fullName.length % colors.length];

  return (
    <div className=" relative  bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center overflow-hidden">
      <div className="h-3 bg-purple-500 absolute top-0 left-0 right-0"></div>
      {/* Avatar wrapper */}
      <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-purple-400 blur-lg opacity-40"></div>

        <div className="relative w-24 h-24 rounded-full bg-white p-1">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            {!imageLoaded && (
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-full text-white text-3xl font-semibold ${color}`}
              >
                {firstLetter}
              </div>
            )}

            {/* Profile image */}
            <img
              src={user.image}
              alt={user.fullName}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
              className={`w-full h-full object-cover transition-opacity duration-200 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
      {/* User Info */}
      <div className="space-y-4 w-full">
        {/* Full Name */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <UserRound className="h-4 w-4" />
            <span>Full Name</span>
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
            {user.fullName}
          </h2>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Mail className="h-4 w-4" />
            <span>Email Address</span>
          </div>
          <p className="text-lg text-gray-500/80 break-all">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
