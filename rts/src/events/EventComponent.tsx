const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("I am being dragged");
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDrag={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
