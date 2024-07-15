import { CSSProperties, ReactNode, useState } from "react";

interface Props {
  defaultStatus?: boolean;
  onColor: string;
  offColor?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function ToggleButton({ defaultStatus, onColor, offColor, style, children }: Props) {
  const [status, setStatus] = useState(Boolean(defaultStatus));

  return <button
    style={{...{
      height: "1rem",
      background: status ? onColor : (offColor || "white"),
      border: "1px solid #3F3F3F"
    }, ...style}}
    onClick={() => setStatus(!status)}
  >
    {children}
  </button>;
}
