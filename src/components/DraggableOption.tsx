
import { useDrag } from "react-dnd";

export default function DraggableOption({ id, label }: any) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "OPTION",
    item: { id, label },
    collect: monitor => ({ isDragging: monitor.isDragging() })
  }));

  return (
    <div
      ref={drag}
      className="option"
      style={{ opacity: isDragging ? 0.5 : 1, touchAction: "none" }}
    >
      {label}
    </div>
  );
}
