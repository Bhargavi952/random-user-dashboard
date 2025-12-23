import type { User } from "../types/user";
import { Mail, UserRound } from "lucide-react";
import Avatar from "./Avatar";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className=" relative  bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center overflow-hidden">
      <div className="h-2 bg-teal-500 absolute top-0 left-0 right-0"></div>
      <Avatar src={user.image} alt={user.fullName} />
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
