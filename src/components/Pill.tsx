import { LucideProps } from "lucide-react";

type PillsType = {
  text: string;
  icon: React.ComponentType<LucideProps>;
  backgroundColor: string;
  color: string;
}

function Pill({ text, icon: Icon, backgroundColor, color }: PillsType) {
  return (
    <div className="pill" style={{ backgroundColor, color }}>
      <p>{text}</p>
      <Icon size={18} />
    </div>
  )
}

export default Pill;