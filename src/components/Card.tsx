import { ReactNode } from "react";

interface cardProps {
  children?: ReactNode;
  className?: string;
}

const Card = ({ className = "", children }: cardProps) => {
  return <div className={`p-0 shadow rounded ${className}`}>{children}</div>;
};

export default Card;
