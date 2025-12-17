import { useDrop } from "react-dnd";
import { Zone } from "../types";

type DropZoneProps = {
  zone: Zone;
  placedItem?: string;
  incorrect: boolean;
  onDrop: (zoneId: string, itemId: string) => void;
};

export default function DropZone({
  zone,
  placedItem,
  incorrect,
  onDrop
}: DropZoneProps) {
  const [, drop] = useDrop(() => ({
    accept: "OPTION",
    drop: (item: { id: string; label: string }) => onDrop(zone.id, item.label)
  }));

  return (
    <div
      ref={drop}
      className="zone-hitbox"
      style={{
        position: "absolute",
        left: `${zone.leftPct * 100}%`,
        top: `${zone.topPct * 100}%`,
        width: `${zone.widthPct * 100}%`,
        height: `${zone.heightPct * 100}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      {placedItem && (
        <div className={`zone-pill ${incorrect ? "zone-wrong" : ""}`}>
          {placedItem}
        </div>
      )}
    </div>
  );
}
