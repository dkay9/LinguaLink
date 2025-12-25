"use client";

type LanguageSelectProps = {
  value: string;
  onChange: (lang: string) => void;
};

export default function LanguageSelect({
  value,
  onChange,
}: LanguageSelectProps) {
  return (
    <select
      className="p-2 rounded text-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="French">French</option>
      <option value="Spanish">Spanish</option>
      <option value="German">German</option>
      <option value="Yoruba">Yoruba</option>
      <option value="Igbo">Igbo</option>
      <option value="Hausa">Hausa</option>
    </select>
  );
}
