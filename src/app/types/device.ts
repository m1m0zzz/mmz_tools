export type Device = {
  name: string,
  description: string,
  description_en: string,
  imagePath: string
}

export type Folder = {
  name: string,
  children: Device[]
}

export function isDevice(obj: Device | Folder): obj is Device {
  return "description" in obj;
}

export function isFolder(obj: Device | Folder): obj is Folder {
  return "children" in obj;
}

export function searchDeviceAndFolder(devices: (Folder | Device)[], name: string): (Device | Folder)[] {
  const array: (Folder | Device)[] = [];
  for (let i = 0; i < devices.length; i++) {
    const device = devices[i];
    if (device.name.toLowerCase().indexOf(name.toLowerCase()) != -1) {
      array.push(device);
    } else if (isFolder(device)) {
      const ary = searchDeviceAndFolder(device.children, name);
      if (ary.length > 0) array.push(device);
    }
  }
  return array;
}

export function findDevice(devices: (Folder | Device)[], name: string): Device | undefined {
  for (let i = 0; i < devices.length; i++) {
    const device = devices[i];
    if (isFolder(device)) {
      const d = findDevice(device.children, name);
      if (d) return d;
    } else {
      if (device.name.toLowerCase() == name.toLowerCase()) return device;
    }
  }
}

export function devicesFlattenWithActiveFolder(devices: (Folder | Device)[], activeFolder?: "all" | string) {
  let array: (Folder | Device)[] = [];
  for (let i = 0; i < devices.length; i++) {
    const device = devices[i];
    array.push(device);
    if (isFolder(device) && (device.name == activeFolder || activeFolder == "all")) {
      device.children.forEach(d => {
        array.push(d);
      });
    }
  }
  return array;
}

export function findActiveDeviceWithDirection(devices: (Folder | Device)[], activeDevice: string, activeFolder: string, direction: number): "-1" | string | undefined {
  const flattened = devicesFlattenWithActiveFolder(devices, activeFolder);
  for (let i = 0; i < flattened.length; i++) {
    const device = flattened[i];
    if (device.name == activeDevice) {
      const pos = i + direction;
      if (pos >= flattened.length) {
        return undefined;
      } else if (0 > pos) {
        return "-1"; // focus input
      } else {
        return flattened[pos].name;
      }
    }
  }
}
