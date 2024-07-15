import { Device, Folder } from "./types/device";

import ducker1 from "@/app/assets/devices/ducker1.adv.jpg";
import ducker2 from "@/app/assets/devices/ducker2.adv.jpg";
import stutter1 from "@/app/assets/devices/stutter1.adv.jpg";
import stutter2 from "@/app/assets/devices/stutter2.adv.jpg";
import ducker1_midi from "@/app/assets/devices/ducker1_midi.adv.jpg";
import tools_bass_mono from "@/app/assets/devices/tools_bass_mono.adg.jpg";
import tools_bw_filter from "@/app/assets/devices/tools_bw_filter.adg.jpg";
import tools_dry_wet from "@/app/assets/devices/tools_dry_wet.adg.jpg";
import tools_ducker1 from "@/app/assets/devices/tools_ducker1.adg.jpg";
import tools_ducker1_midi from "@/app/assets/devices/tools_ducker1_midi.adg.jpg";
import tools_ducker2 from "@/app/assets/devices/tools_ducker2.adg.jpg";
import tools_eq8_default from "@/app/assets/devices/tools_eq8_default.adv.jpg";
import tools_freq_splitter from "@/app/assets/devices/tools_freq_splitter.adg.jpg";
import tools_mid_side from "@/app/assets/devices/tools_mid_side.adg.jpg";
import tools_natural_haas from "@/app/assets/devices/tools_natural_haas.adg.jpg";
import tools_scalable_lfo from "@/app/assets/devices/tools_scalable_lfo.adg.jpg";
import tools_steep_eq from "@/app/assets/devices/tools_steep_eq.adg.jpg";
import tools_stutter1 from "@/app/assets/devices/tools_stutter1.adg.jpg";
import tools_stutter2 from "@/app/assets/devices/tools_stutter2.adg.jpg";

export const devices: (Folder | Device)[]  = [
  {
    name: "EQ Eight",
    children: [
      {
        name: "tools_eq8_default.adv",
        description: "",
        imagePath: tools_eq8_default.src
      },
    ]
  },
  {
    name: "Shaper",
    children: [
      {
        name: "ducker1.adv",
        description: "ducker dayo yo yo",
        imagePath: ducker1.src
      },
      {
        name: "ducker2.adv",
        description: "yo yo yo",
        imagePath: ducker2.src
      },
      {
        name: "stutter1.adv",
        description: "",
        imagePath: stutter1.src
      },
      {
        name: "stutter2.adv",
        description: "",
        imagePath: stutter2.src
      },
    ]
  },
  {
    name: "Shaper MIDI",
    children: [
      {
        name: "ducker1_midi.adv",
        description: "",
        imagePath: ducker1_midi.src
      },
    ]
  },
  {
    name: "tools_bass_mono.adg",
    description: "Utilityの[Bass Mono] をより広い周波数で使えるようにしたデバイス。ただし、位相ズレに注意",
    imagePath: tools_bass_mono.src
  },
  {
    name: "tools_bw_filter.adg",
    description: "Band Width Filter。[Width] を上げるとバンド幅が狭くなります。中心の周波数は 400Hz。",
    imagePath: tools_bw_filter.src
  },
  {
    name: "tools_dry_wet.adg",
    description: "すべてのデバイス・ラックに Dry/Wet を追加する。",
    imagePath: tools_dry_wet.src
  },
  {
    name: "tools_ducker1.adg",
    description: "テンポベースのダッキングツール。\n[depth] でダッキングの深さを調節できる。",
    imagePath: tools_ducker1.src
  },
  {
    name: "tools_ducker1_midi.adg",
    description: "ducker1のMIDIでトリガーするバージョン。",
    imagePath: tools_ducker1_midi.src
  },
  {
    name: "tools_ducker2.adg",
    description: "より深く、グルーヴ感のあるダッキング。",
    imagePath: tools_ducker2.src
  },
  {
    name: "tools_freq_splitter.adg",
    description: "",
    imagePath: tools_freq_splitter.src
  },
  {
    name: "tools_mid_side.adg",
    description: "",
    imagePath: tools_mid_side.src
  },
  {
    name: "tools_natural_haas.adg",
    description: "",
    imagePath: tools_natural_haas.src
  },
  {
    name: "tools_scalable_lfo.adg",
    description: "",
    imagePath: tools_scalable_lfo.src
  },
  {
    name: "tools_steep_eq.adg",
    description: "",
    imagePath: tools_steep_eq.src
  },
  {
    name: "tools_stutter1.adg",
    description: "",
    imagePath: tools_stutter1.src
  },
  {
    name: "tools_stutter2.adg",
    description: "",
    imagePath: tools_stutter2.src
  },
]
