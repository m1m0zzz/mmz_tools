import { ReactNode } from "react";
import styles from "./index.module.css"
import ToggleButton from "../ToggleButton";
import { FiCircle } from "react-icons/fi";


interface TrackProps {
  name: string;
  index: number;
  bg?: string;
  color?: string;
  minHeight?: number | string;
  children?: ReactNode;
}


export function Track({ name, index, bg, color, minHeight, children }: TrackProps): ReactNode {
  return (
    <div className={styles.track} style={{minHeight: minHeight || 200}}>
      <div className={styles.clips_wrap}>
        <div className={styles.clips}>
          {children}
        </div>
      </div>
      <div className={styles.track_info}>
        <div
          className={styles.track_title}
          style={{
            color: color || "black",
            background: bg || "white"
          }}
        >
          {index + " " + name}
        </div>
        <div className={styles.track_control}>
          <div className={styles.row_grid_2} style={{marginBottom: 4}}>
            <ToggleButton
              defaultStatus={true}
              onColor="#FFAE19"
              style={{flex: 2}}
            >{index}</ToggleButton>
            <div className={styles.row_grid_2}>
              <ToggleButton
                onColor="#35A0FD"
                style={{flex: 1}}
              >s</ToggleButton>
              <ToggleButton
                onColor="#FF4F23"
                style={{flex: 1}}
              ><FiCircle size={"50%"} fill="black" /></ToggleButton>
            </div>
          </div>
          <div className={styles.row_grid_2} style={{marginBottom: 4}}>
            <div className={styles.track_slider}>0</div>
            <div className={styles.track_slider}>C</div>
          </div>
          <div className={styles.row_grid_3} style={{marginBottom: 4}}>
            <div className={styles.track_slider}>-inf</div>
            <div className={styles.track_slider}>-inf</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  lang: string;
  children: ReactNode;
}

export default function Tracks({ lang, children }: Props) {
  // useWindowEvent('resize', (event) => {
  //   console.log(timeBarRef.current?.clientWidth);
  // });

  // const timeBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.tracks}>
      <div className={styles.time_bar}></div>
      <div className={styles.container}>
        <div  className={styles.track_wrap}>
          <>{children}</>
          <div className={styles.track_dummy}>
            <div className={styles.clips_wrap}>
              <div className={styles.clips_dummy}>
                <div className={styles.dummy_clip}>
                  <p className={styles.dummy_clip_message}>
                    {lang == "ja" ?
                      "ファイルとデバイスをここへドロップします" :
                      "Drop Files and Devices Here"
                    }
                  </p>
                </div>
              </div>
            </div>
          <div className={styles.track_dummy_info}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ClipProps {
  pos: number;
  len: number;
  color?: string;
  children?: ReactNode;
}

export function Clip({ pos, len, color, children }: ClipProps) {
  const CLIP_UNIT_SIZE = 32;

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: CLIP_UNIT_SIZE * len,
        padding: 12,
        left: CLIP_UNIT_SIZE * pos,
        backgroundColor: color || "white"
      }}
    >
      {children}
    </div>
  )
}
