'use client';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ 
  message = "Something went wrong", 
  onRetry 
}: ErrorStateProps) {
  return (
    <div className="text-center py-8" role="alert">
      <p className="text-red-600 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-blue-600 hover:text-blue-700 underline"
        >
          Try again
        </button>
      )}
    </div>
  );
} 