import { Device, Folder } from "./types/device";

import ducker1 from "@/app/assets/devices/ducker1.adv.jpg";
import ducker2 from "@/app/assets/devices/ducker2.adv.jpg";
import stutter1 from "@/app/assets/devices/stutter1.adv.jpg";
import stutter2 from "@/app/assets/devices/stutter2.adv.jpg";
import ducker1_midi from "@/app/assets/devices/ducker1_midi.adv.jpg";
import tools_bass_mono from "@/app/assets/devices/tools_bass_mono.adg.jpg";
import tools_bw_filter from "@/app/assets/devices/tools_bw_filter.adg.jpg";
import tools_clear from "@/app/assets/devices/tools_clear.adg.jpg";
import tools_dry_wet from "@/app/assets/devices/tools_dry_wet.adg.jpg";
import tools_ducker1 from "@/app/assets/devices/tools_ducker1.adg.jpg";
import tools_ducker1_midi from "@/app/assets/devices/tools_ducker1_midi.adg.jpg";
import tools_ducker2 from "@/app/assets/devices/tools_ducker2.adg.jpg";
import tools_eq8_default from "@/app/assets/devices/tools_eq8_default.adv.jpg";
import tools_freq_splitter from "@/app/assets/devices/tools_freq_splitter.adg.jpg";
import tools_mid_side from "@/app/assets/devices/tools_mid_side.adg.jpg";
import tools_natural_haas from "@/app/assets/devices/tools_natural_haas.adg.jpg";
import tools_noise_osc from "@/app/assets/devices/tools_noise_osc.adv.jpg";
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
        description: "見やすさ、使いやすさを意識した EQ Eight\n[デフォルトのプリセットとして保存] を推奨。",
        description_en: "EQ Eight for ease of viewing and use.\n[Save as default Presets] is recommended.",
        imagePath: tools_eq8_default.src
      },
    ]
  },
  {
    name: "Operator",
    children: [
      {
        name: "tools_noise_osc.adv",
        description: "ノイズオシレーター",
        description_en: "noise oscillator",
        imagePath: tools_noise_osc.src
      },
    ]
  },
  {
    name: "Shaper",
    children: [
      {
        name: "ducker1.adv",
        description: "ダッキング用シェイパー",
        description_en: "Shaper for ducking",
        imagePath: ducker1.src
      },
      {
        name: "ducker2.adv",
        description: "ダッキング用シェイパー",
        description_en: "Shaper for ducking",
        imagePath: ducker2.src
      },
      {
        name: "stutter1.adv",
        description: "スタッター用シェイパー",
        description_en: "Shaper for stutter",
        imagePath: stutter1.src
      },
      {
        name: "stutter2.adv",
        description: "スタッター用シェイパー",
        description_en: "Shaper for stutter",
        imagePath: stutter2.src
      },
    ]
  },
  {
    name: "Shaper MIDI",
    children: [
      {
        name: "ducker1_midi.adv",
        description: "MIDIトリガー ダッキング用シェイパー",
        description_en: "MIDI trigger Shaper for ducking",
        imagePath: ducker1_midi.src
      },
    ]
  },
  {
    name: "tools_bass_mono.adg",
    description: "低音をモノラルにするデバイス。ただし、位相ズレに注意！",
    description_en: "A device that makes bass sound mono. However, beware of phase shift!",
    imagePath: tools_bass_mono.src
  },
  {
    name: "tools_bw_filter.adg",
    description: "Band Width Filter。[Width] でバンド幅を調整できる。中心の周波数は 400Hz",
    description_en: "Band Width Filter.\nThe bandwidth can be adjusted with [Width]. The center frequency is 400Hz",
    imagePath: tools_bw_filter.src
  },
  {
    name: "tools_clear.adg",
    description: "音に透明感を与えるエキサイター",
    description_en: "Exciter that adds clarity to sound",
    imagePath: tools_clear.src
  },
  {
    name: "tools_dry_wet.adg",
    description: "すべてのデバイスとラックに [Dry/Wet] パラメーターを追加する。",
    description_en: "Add [Dry/Wet] parameters to all devices and racks.",
    imagePath: tools_dry_wet.src
  },
  {
    name: "tools_ducker1.adg",
    description: "テンポベースのダッキングツール。\n[depth] でダッキングの深さを調節できる。",
    description_en: "Tempo based ducking tool.\nDucking depth can be adjusted with [depth].",
    imagePath: tools_ducker1.src
  },
  {
    name: "tools_ducker1_midi.adg",
    description: "ducker1のMIDIでトリガーするバージョン",
    description_en: "MIDI trigger version ducker1",
    imagePath: tools_ducker1_midi.src
  },
  {
    name: "tools_ducker2.adg",
    description: "より深く、よりグルーヴィーなダッキング",
    description_en: "Deeper and groovier ducking",
    imagePath: tools_ducker2.src
  },
  {
    name: "tools_freq_splitter.adg",
    description: "入力された周波数を Low と High に分離する",
    description_en: "frequency splitter",
    imagePath: tools_freq_splitter.src
  },
  {
    name: "tools_mid_side.adg",
    description: "Mid/Side 分離機",
    description_en: "Mid/Side splitter",
    imagePath: tools_mid_side.src
  },
  {
    name: "tools_natural_haas.adg",
    description: "自然に聞こえるように設計されたハースエフェクト",
    description_en: "Haas effects designed to sound natural.",
    imagePath: tools_natural_haas.src
  },
  {
    name: "tools_scalable_lfo.adg",
    description: "[Scale] でアマウント量を調節可能なLFO",
    description_en: "LFO with [Scale] adjustable amount.",
    imagePath: tools_scalable_lfo.src
  },
  {
    name: "tools_steep_eq.adg",
    description: "フィルターカーブの急な ロー/ハイ パスフィルター",
    description_en: "Steep filter curve Low/High pass filter",
    imagePath: tools_steep_eq.src
  },
  {
    name: "tools_stutter1.adg",
    description: "[Depth] で深さを調節できるスタッター",
    description_en: "Stutter with adjustable [Depth]",
    imagePath: tools_stutter1.src
  },
  {
    name: "tools_stutter2.adg",
    description: "[Depth] で深さを調節できるスタッター",
    description_en: "Stutter with adjustable [Depth]",
    imagePath: tools_stutter2.src
  },
]
