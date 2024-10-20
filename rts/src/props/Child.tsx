import React from "react";
interface ChildProps {
  color: string;
  onClick: () => void;
  children: any;
}

const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export const ChildAsFc: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Child;
