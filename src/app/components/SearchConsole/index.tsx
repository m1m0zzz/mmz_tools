import React, { createRef, forwardRef, RefObject, useImperativeHandle, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"

import { Device, devicesFlattenWithActiveFolder, findActiveDeviceWithDirection, searchDeviceAndFolder, Folder, isDevice } from "@/app/types/device";
import { devices } from "@/app/data";

import { SearchConsoleFile } from "./File";
import { SearchConsoleFolder } from "./Folder";

import styles from "./index.module.css"

interface Props {
  activeDevice: string;
  setActiveDevice: (device: string) => void;
  setIsDevicesOpen: (isOpen: boolean) => void;
}

export const SearchConsole = forwardRef(function _SearchConsole({
  activeDevice,
  setActiveDevice,
  setIsDevicesOpen
}: Props, ref) {
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const [searchString, setSearchString] = useState("");
  // const [activeDevice, setActiveDevice] = useState("");
  const [activeFolder, setActiveFolder] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        setIsConsoleOpen(true);
        setTimeout(() => {
          // console.log("async focus");
          inputRef.current?.focus();
          inputRef.current?.select();
        }, 200);
      },
      blur() {
        inputRef?.current?.blur();
      },
    };
  }, []);

  const deviceRefs = useRef<RefObject<HTMLLIElement>[]>([]);
  const flattened = devicesFlattenWithActiveFolder(devices, "all");
  const deviceName2RefIndexMap: {[id: string]: number} = {};
  flattened.forEach((device, index) => {
    deviceRefs.current[index] = createRef<HTMLLIElement>();
    deviceName2RefIndexMap[device.name] = index;
  });

  const deviceRef = (name: string) => {
    return deviceRefs.current[deviceName2RefIndexMap[name]];
  }

  const searchedDevices = useMemo(() => {
    if (searchString == "") {
      return devices;
    } else {
      return searchDeviceAndFolder(devices, searchString);
    }
  }, [searchString]);

  const handleArrowDownKeyDown = () => {
    deviceRef(activeDevice).current?.blur();
    const device = findActiveDeviceWithDirection(searchedDevices, activeDevice, activeFolder, 1);
    if (device && device != "-1") {
      const ref = deviceRef(device);
      ref.current?.focus();
      setActiveDevice(device);
    }
  }

  const handleArrowUpKeyDown = () => {
    deviceRef(activeDevice).current?.blur();
    const device = findActiveDeviceWithDirection(searchedDevices, activeDevice, activeFolder, -1);
    if (device && device != "-1") {
      const ref = deviceRef(device);
      ref.current?.focus();
      setActiveDevice(device);
    } else if (device == "-1") {
      inputRef.current?.focus();
      setActiveDevice("");
    }
  }

  const handleDeviceActive = (name: string) => {
    setActiveDevice(name);
    setIsDevicesOpen(true);
  }

  return (
    <div className={styles.console}>
      <div className={styles.search_input_wrap}>
        <button
          className={styles.console_button}
          onClick={() => setIsConsoleOpen(!isConsoleOpen)}
        >
          {isConsoleOpen ?
            <FiChevronRight color={"white"} size={"1.2rem"} /> :
            <FiChevronDown color={"white"} size={"1.2rem"} />
          }
        </button>
        <input
          ref={inputRef}
          className={styles.search_input}
          type="search"
          placeholder="検索 (Ctrl + F)"
          aria-label="デバイスを検索"
          style={isConsoleOpen ? {} : {display: "none"}}
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key == "ArrowDown") {
              event.preventDefault();
              event.currentTarget.blur();
              if (searchedDevices.length > 0)
                deviceRef(searchedDevices[0].name).current?.focus();
            }
          }}
        />
      </div>
      <ol className={styles.result} style={{display: isConsoleOpen ? "block" : "none"}}>
        {searchedDevices.map((device: Folder | Device)  => {
          if (isDevice(device)) {
            return (
              <SearchConsoleFile
                key={device.name}
                ref={deviceRef(device.name)}
                name={device.name}
                isActive={activeDevice == device.name}
                onFocus={handleDeviceActive}
                onArrowDownKey={handleArrowDownKeyDown}
                onArrowUpKey={handleArrowUpKeyDown}
              />
            )
          } else { // folder
            return (
            <SearchConsoleFolder
              key={device.name}
              ref={deviceRef(device.name)}
              name={device.name}
              isActive={activeDevice == device.name}
              isOpen={activeFolder == device.name}
              onFocus={(name) => setActiveDevice(name)}
              onOpen={(name) => {
                activeFolder == name ? setActiveFolder("") : setActiveFolder(name);
                setActiveDevice(name);
              }}
              onArrowDownKey={handleArrowDownKeyDown}
              onArrowUpKey={handleArrowUpKeyDown}
            >
              <ul>
                {device.children.map((d: Device) => {
                  return <SearchConsoleFile
                    key={d.name}
                    ref={deviceRef(d.name)}
                    name={d.name}
                    isActive={activeDevice == d.name}
                    depth={1}
                    onFocus={handleDeviceActive}
                    onArrowDownKey={handleArrowDownKeyDown}
                    onArrowUpKey={handleArrowUpKeyDown}
                  />
                })}
              </ul>
            </SearchConsoleFolder>
            )
          }
        })}
      </ol>
    </div>
  )
})
