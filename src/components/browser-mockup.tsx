'use client'

export default function BrowserMockup() {
  return (
    <div className="w-full h-[400px] bg-zinc-800 rounded-lg shadow-2xl overflow-hidden">
      <div className="h-8 bg-zinc-900 flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="p-4 space-y-4">
        <div className="h-8 bg-zinc-700 rounded animate-pulse" />
        <div className="h-8 bg-zinc-700 rounded animate-pulse" />
        <div className="h-8 bg-zinc-700 rounded animate-pulse" />
        <div className="h-8 bg-zinc-700 rounded animate-pulse" />
      </div>
    </div>
  )
}

