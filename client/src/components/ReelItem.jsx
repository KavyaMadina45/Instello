export default function ReelItem({ reel }) {
  return (
    <div className="h-screen w-full snap-start relative">

      {/* VIDEO */}
      <video
        src={reel.video}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />

      {/* RIGHT ACTION BAR */}
      <div className="absolute right-3 bottom-20 flex flex-col gap-4 text-white">
        <button>❤️</button>
        <button>💬</button>
        <button>🔄</button>
      </div>

      {/* BOTTOM INFO */}
      <div className="absolute bottom-5 left-4 text-white">
        <p className="font-semibold">@{reel.user}</p>
        <p className="text-sm">{reel.caption}</p>
        <p className="text-xs mt-1">🎵 Original audio</p>
      </div>

    </div>
  );
}
