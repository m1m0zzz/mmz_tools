/* eslint-disable @next/next/no-img-element */
"use client"

import { useMemo, useRef, useState } from "react";
import { FiChevronLeft, FiChevronUp, FiExternalLink } from "react-icons/fi";
import { useHotkeys } from 'react-hotkeys-hook';

import Nav from "./components/Nav";
import Tracks, { Clip, Track } from "./components/Tracks";
import { SearchConsole } from "./components/SearchConsole";

import { findDevice } from "./types/device";
import { devices } from "./data";

import coverImage from "./assets/mmz_tools.png";
import styles from "./page.module.css";

export default function Home() {
  const [lang, setLang] = useState<"ja" | "en">("ja");
  const [isDevicesOpen, setIsDevicesOpen] = useState(false);
  const [activeDevice, setActiveDevice] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  useHotkeys('ctrl+f', () => {
    searchInputRef.current?.focus();
  }, { preventDefault: true });

  useHotkeys('ctrl+alt+l', () => {
    setIsDevicesOpen(!isDevicesOpen);
  }, { preventDefault: true });

  const activeDeviceData = useMemo(
    () => findDevice(devices, activeDevice),
    [activeDevice]
  );

  return (
    <main className={styles.main}>
      <Nav lang={lang} onUpdate={(l) => setLang(l)} />
      <div className={styles.top}>
        <SearchConsole
          activeDevice={activeDevice}
          setActiveDevice={setActiveDevice}
          setIsDevicesOpen={setIsDevicesOpen}
          ref={searchInputRef}
        />
        <Tracks>
          <Track name="mmz_tools" index={1} bg="#d0dbef">
            <Clip pos={1} len={6} color="white">
              <img
                src={coverImage.src} alt="thumbnail"
                className={styles.cover_image}
              />
            </Clip>
            {/* TODO: set url */}
            <a href="#" className={styles.get_link_a}>
              <Clip pos={8} len={5}>
                <div className={styles.get_link}>
                  <p>Get mmz_tools <FiExternalLink /></p>
                </div>
              </Clip>
            </a>
          </Track>
          <Track name="About" index={2}>
            <div className={styles.track_about}>
              <section className={styles.about_section}>
                <h2 className={styles.about_title}>Contents</h2>
                <ul>
                  <li>
                    <span className={styles.about_text}>
                      Ableton Group Preset (*.adg) × 13
                    </span>
                  </li>
                  <li>
                    <span className={styles.about_text}>
                      Ableton Device Preset (*.adv) × 6
                    </span>
                  </li>
                </ul>
              </section>
              <section className={styles.about_section}>
                <h2 className={styles.about_title}>Requirement</h2>
                <ul>
                  <li>
                    <span className={styles.about_text}>
                      Ableton Live 11+ Suite
                    </span>
                  </li>
                </ul>
              </section>
              <section className={styles.about_section}>
                <h2 className={styles.about_title}>Credit</h2>
                <ul>
                  <li>
                    <span className={styles.about_text}>
                      Illustration by <a target="_blank" href="https://x.com/t0lilo">t0lilo</a>
                    </span>
                  </li>
                  <li>
                    <span className={styles.about_text}>
                      made by <a target="_blank" href="https://x.com/m1m0zzz">mimoz</a>
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </Track>
          {/* original color; #FF5500, #4DA6E9, #F20185, #FF0000 */}
          <Track name="Links" index={3} bg="#3C3C3C" color="white" minHeight={120}>
            <a target="_blank" href="https://soundcloud.com/mimozzz">
              <Clip pos={2} len={1} color="#ff9661"></Clip>
            </a>
            <a target="_blank" href="https://x.com/m1m0zzz">
              <Clip pos={4} len={2} color="#7abaea"></Clip>
            </a>
            <a target="_blank" href="https://www.instagram.com/m1m0zzz/">
              <Clip pos={7} len={1} color="#e699c3"></Clip>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCgfte7zixiGJ6ZC6ttu3kfg">
              <Clip pos={9} len={1} color="#d64b4b"></Clip>
            </a>
          </Track>
        </Tracks>
      </div>
      <div className={styles.bottom} style={isDevicesOpen ? {} : {display: "none"}}>
        <div className={`${styles.bottom_item} ${styles.information}`}>
          <p className={styles.info_title}>{activeDeviceData?.name || "info view"}</p>
          <div className={styles.info_desc}>
            {(activeDeviceData?.description || "description").split("\n").map((desc, index) => {
              return <p key={index}>{desc}</p>
            }) }
          </div>
        </div>
        <div className={`${styles.bottom_item} ${styles.device}`}>
          {/* note: ディスプレイズーム：128%, 高さ240px */}
          {
            activeDeviceData ?
            <img
              className={styles.device_image}
              src={activeDeviceData.imagePath}
              alt={activeDeviceData.name}
            /> :
            <div className={styles.device_message}>
              インストゥルメントまたはサンプルをここへドロップします
            </div>
          }
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.credit}>
          &copy; {(new Date).getFullYear()} mimoz
        </div>
        <button
          className={styles.device_button}
          onClick={() => setIsDevicesOpen(!isDevicesOpen)}
        >
          {isDevicesOpen ?
            <FiChevronUp color={"white"} size={"1.2rem"} /> :
            <FiChevronLeft color={"white"} size={"1.2rem"} />
          }
        </button>
      </div>
    </main>
  );
}
