import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableIconProps {
  id: string;
  containerName: string;
}

const DraggableIcon: React.FC<DraggableIconProps> = ({ id, containerName }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ICON',
    item: { id, containerName },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id, containerName]);

  return (
    <div ref={drag} className={`icon ${isDragging ? 'dragging' : ''}`}>
      {id}
    </div>
  );
}

export default DraggableIcon;
