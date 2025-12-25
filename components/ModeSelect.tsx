"use client";
import { Mode } from "@/lib/types";

type ModeSelectProps = {
  value: Mode;
  onChange: (mode: Mode) => void;
};

export default function ModeSelect({ value, onChange }: ModeSelectProps) {
  return (
    <select
      className="p-2 rounded text-black"
      value={value}
      onChange={(e) => onChange(e.target.value as Mode)}
    >
      <option value="translate">Translate</option>
      <option value="explain">Explain</option>
      <option value="correct">Correct</option>
      <option value="lesson">Lesson</option>
    </select>
  );
}
