import DraggableOption from "./DraggableOption";
import { OPTIONS } from "../data/options";

export default function OptionsPanel() {
  return (
    <aside className="options-panel">
      <div className="options-title">OPTIONS</div>

      <div className="options-list">
        {OPTIONS.map(opt => (
          <DraggableOption
            key={opt.id}
            id={opt.id}
            label={opt.label}
          />
        ))}
      </div>
    </aside>
  );
}
