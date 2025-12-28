"use client";

export default function VoiceWaveform() {
  return (
    <div className="flex items-end gap-1 h-6">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-1 bg-red-400 rounded-full animate-wave"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
