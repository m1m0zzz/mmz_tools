import { FiFolder, FiPlay } from "react-icons/fi"
import React, { forwardRef, ReactElement, useImperativeHandle, useRef } from "react";
import styles from "./Folder.module.css"

interface Props {
  name: string;
  isActive: boolean;
  isOpen: boolean;
  onFocus?: (id: string) => void;
  onOpen?: (id: string) => void;
  onArrowDownKey?: () => void;
  onArrowUpKey?: () => void;
  children: ReactElement;
}

export const SearchConsoleFolder = forwardRef(function _SearchConsoleFolder({
  name, isActive, isOpen, onFocus, onOpen, onArrowDownKey, onArrowUpKey, children }: Props,
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
    <ul>
      <li
        ref={liRef}
        tabIndex={0}
        className={styles.search_console_folder}
        onClick={() => onFocus && onFocus(name)}
        onFocus={() => onFocus && onFocus(name)}
        onDoubleClick={() => onOpen && onOpen(name)}
        onKeyDown={(event) => {
          if (event.key == "Enter" || event.key == "Space") {
            onOpen && onOpen(name);
          }
          if (event.key == "ArrowDown") {
            event.preventDefault();
            onArrowDownKey && onArrowDownKey();
          } else if (event.key == "ArrowUp") {
            event.preventDefault();
            onArrowUpKey && onArrowUpKey();
          }
        }}
        style={{backgroundColor: isActive ? "#79C3EC" : undefined}}
      >
        <FiPlay
          fill="black"
          size={10}
          style={{
            marginRight: 2,
            transform: `rotate(${isOpen ? 90 : 0}deg)`
          }}
        />
        <span style={{marginRight: 3}}>
          <FiFolder />
        </span>
        <span>{name}</span>
      </li>
      {isOpen && children}
    </ul>
  )
})
