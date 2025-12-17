import DropZone from "./DropZone";
import { ZONES } from "../data/zones";
import { Zone } from "../types";

type Props = {
  placements: Record<string, string>;
  incorrectZones: string[];
  onDrop: (zoneId: string, itemId: string) => void;
  time: number;
  onFinish: () => void;
  onClear: () => void;
};

export default function MapCanvas({
  placements,
  incorrectZones,
  onDrop,
  time,
  onFinish,
  onClear
}: Props) {
  return (
    <section className="map-section">

      {/* TOP BAR */}
      <div className="map-header">
        <div className="map-timer">⏱ {time}s</div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button className="map-clear" onClick={onClear}>
            CLEAR
          </button>

          <button className="map-finish" onClick={onFinish}>
            FINISH
          </button>
        </div>
      </div>

      {/* MAP */}
      <div className="map-canvas">
        <div className="map-frame">
          <img src="/map.png" className="map-image" draggable={false} />

          {ZONES.map(zone => (
            <DropZone
              key={zone.id}
              zone={zone}
              placedItem={placements[zone.id]}
              incorrect={incorrectZones.includes(zone.id)}
              onDrop={onDrop}
            />
          ))}
        </div>
      </div>

    </section>
  );
}


