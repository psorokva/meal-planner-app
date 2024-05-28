import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableIcon from './DraggableIcon';

interface DragDropContainerProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  moveIcon: (id: string, fromContainer: string, toContainer: string) => void;
  containerName: string;
}

const DragDropContainer: React.FC<DragDropContainerProps> = ({ items, setItems, moveIcon, containerName }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ICON',
    drop: (item: { id: string, containerName: string }) => moveIcon(item.id, item.containerName, containerName),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [items]);

  return (
    <div ref={drop} className={`drop-zone ${isOver ? 'over' : ''}`}>
      {items.map((id) => (
        <DraggableIcon key={id} id={id} containerName={containerName} />
      ))}
    </div>
  );
}
export default DragDropContainer;
