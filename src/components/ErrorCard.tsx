import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorCardProps {
  message: string;
  onRetry: () => void;
}

const ErrorCard = ({ message, onRetry }: ErrorCardProps) => {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl animate-fade-in bg-card/80 backdrop-blur-sm shadow-xl">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-red-500" />

      <div className="pt-10 pb-10 px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Error icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
            <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center border border-red-500/20">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
          </div>

          {/* Error text */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-800/50 leading-relaxed max-w-xs">
              {message}
            </p>
          </div>

          {/* Retry button */}
          <button
            onClick={onRetry}
            className="mt-4 inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
