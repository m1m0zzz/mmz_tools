import { FiFile } from "react-icons/fi"
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./File.module.css"

interface Props {
  name: string;
  isActive: boolean;
  onFocus?: (id: string) => void;
  onArrowDownKey?: () => void;
  onArrowUpKey?: () => void;
  depth?: number;
}

export const SearchConsoleFile = forwardRef(function _SearchConsoleFile({
  name, isActive, onFocus, onArrowDownKey, onArrowUpKey, depth }: Props,
  ref
) {
  const liRef = useRef<HTMLLIElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        liRef?.current?.focus();
      },
      blur() {
        liRef?.current?.blur();
      },
    };
  }, []);

  return (
    <li
      ref={liRef}
      className={styles.search_console_file}
      tabIndex={0}
      style={{
        backgroundColor: isActive ? "#79C3EC" : undefined,
        paddingLeft: `${14 + (depth || 0) * 12}px`
      }}
      onClick={() => onFocus && onFocus(name)}
      onFocus={() => onFocus && onFocus(name)}
      onKeyDown={(event) => {
        if (event.key == "ArrowDown") {
          event.preventDefault();
          onArrowDownKey && onArrowDownKey();
        } else if (event.key == "ArrowUp") {
          event.preventDefault();
          onArrowUpKey && onArrowUpKey();
        }
      }}
    >
      <span style={{marginRight: "3px"}}>
        <FiFile />
      </span>
      <span>{name}</span>
    </li>
  )
})
