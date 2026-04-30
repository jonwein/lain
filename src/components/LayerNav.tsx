"use client";

import { usePathname } from "next/navigation";

type LayerEntry = {
  num: string;
  label: string;
  href: string;
  disabled?: boolean;
};

const ROW1: LayerEntry[] = [
  { num: "01", label: "Weird", href: "/Layer/Wierd" },
  { num: "02", label: "Girls", href: "/Layer/Girls" },
  { num: "03", label: "Psyche", href: "/Layer/Psyche" },
  { num: "04", label: "Religion", href: "/Layer/Religion" },
  { num: "05", label: "Distortion", href: "/Layer/Distortion" },
  { num: "06", label: "Kids", href: "/" },
  { num: "07", label: "Society", href: "/Layer/Society" },
];

const ROW2: LayerEntry[] = [
  { num: "08", label: "Rumors", href: "/Layer/Rumors" },
  { num: "09", label: "Protocol", href: "/Layer/Protocol" },
  { num: "10", label: "Love", href: "/Layer/Love" },
  { num: "11", label: "Infornography", href: "/Layer/Infornography" },
  { num: "12", label: "Landscape", href: "/Layer/Landscape" },
  { num: "13", label: "Ego", href: "/Layer/Ego" },
  { num: "00", label: "Program", href: "/Layer/Program" },
];

export const ALL_LAYERS: LayerEntry[] = [
  { num: "PRVW", label: "Nightmare", href: "/Layer/Nightmare" },
  ...ROW1,
  ...ROW2,
];

function Cell({ entry, current }: { entry: LayerEntry; current: boolean }) {
  const cls = current ? "layerlink0" : "layerlink";
  const onClick = () => {
    if (entry.href && !current && !entry.disabled)
      window.location.href = entry.href;
  };
  return (
    <div className={cls} onClick={onClick}>
      <p>
        {entry.num}:<br />
        &nbsp;&nbsp;{entry.label}&nbsp;&nbsp;
      </p>
    </div>
  );
}

/** Standard horizontal 2-row layer nav used by most layers. */
export default function LayerNav() {
  const pathname = usePathname();
  const isCurrent = (href: string) => href !== "" && pathname === href;
  return (
    <div id="linkcontainer">
      <div
        className={isCurrent("/Layer/Nightmare") ? "prvw current" : "prvw"}
        onClick={() => {
          if (!isCurrent("/Layer/Nightmare"))
            window.location.href = "/Layer/Nightmare";
        }}
      >
        <p style={{ margin: "auto" }}>
          PRVW:
          <br />
          &nbsp;&nbsp;Nightmare&nbsp;&nbsp;
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <div className="linkrow">
          {ROW1.map((l) => (
            <Cell key={l.num} entry={l} current={isCurrent(l.href)} />
          ))}
        </div>
        <div className="linkrow">
          {ROW2.map((l) => (
            <Cell key={l.num} entry={l} current={isCurrent(l.href)} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Vertical column nav (used by Rumors). */
export function LayerNavColumn() {
  const pathname = usePathname();
  const isCurrent = (href: string) => href !== "" && pathname === href;
  return (
    <div id="linkcontainer">
      {ALL_LAYERS.map((l) => (
        <Cell key={l.num} entry={l} current={isCurrent(l.href)} />
      ))}
    </div>
  );
}

export { ROW1, ROW2 };
