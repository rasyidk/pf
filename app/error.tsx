'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Terminal-style error panel */}
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded p-6 font-mono">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#1a1a1a]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-[#666666] text-sm">error.log</span>
          </div>

          {/* Error content */}
          <div className="space-y-3">
            <div className="text-red-400">
              <span className="text-[#666666]">[</span>ERROR<span className="text-[#666666]">]</span> Something went wrong
            </div>
            
            <div className="text-[#a78bfa] text-sm">
              <span className="text-[#666666]">{'>'}</span> {error.message || 'An unexpected error occurred'}
            </div>

            {error.digest && (
              <div className="text-[#666666] text-xs">
                <span className="text-[#333333]">digest:</span> {error.digest}
              </div>
            )}

            {/* Stack trace hint */}
            <div className="text-[#333333] text-xs mt-4">
              <span className="text-[#666666]">{'>'}</span> Check console for detailed stack trace
            </div>
          </div>

          {/* Retry button */}
          <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
            <button
              onClick={reset}
              className="px-6 py-2 bg-[#a78bfa] text-black font-mono font-bold uppercase text-sm hover:bg-[#8b5cf6] transition-colors duration-200 rounded"
            >
              [RETRY]
            </button>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-4 text-center text-[#333333] text-sm font-mono">
          {`// If the problem persists, please refresh the page`}
        </div>
      </div>
    </div>
  );
}
