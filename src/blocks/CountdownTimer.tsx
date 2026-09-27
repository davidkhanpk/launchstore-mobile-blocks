import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "CountdownTimer",
  label: "Countdown Timer",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface CountdownTimerProps {
  title?: string;
  /** ISO date string, editor-entered. */
  endsAt?: string;
}

function remaining(endsAt: string) {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (Number.isNaN(diff) || diff <= 0) return null;
  const s = Math.floor(diff / 1000);
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}

export function CountdownTimerBlock({ title = "Sale ends in", endsAt }: CountdownTimerProps) {
  const target = endsAt ?? new Date(Date.now() + 36 * 3600 * 1000).toISOString();
  const [left, setLeft] = useState(() => remaining(target));
  useEffect(() => {
    const t = setInterval(() => setLeft(remaining(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  const cells = left
    ? [
        { v: left.d, l: "days" },
        { v: left.h, l: "hrs" },
        { v: left.m, l: "min" },
        { v: left.s, l: "sec" },
      ]
    : null;

  return (
    <View className="items-center gap-3 rounded-ls-md bg-ls-brand-primary px-4 py-5">
      <Text className="text-sm font-semibold uppercase tracking-wide text-ls-text-inverse">{title}</Text>
      {cells ? (
        <View className="flex-row gap-2">
          {cells.map((cell) => (
            <View key={cell.l} className="w-14 items-center rounded-ls-md bg-white/15 px-2 py-2">
              <Text className="text-xl font-bold text-white">{String(cell.v).padStart(2, "0")}</Text>
              <Text className="text-[10px] uppercase text-white opacity-70">{cell.l}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text className="text-base font-bold text-white">Finished</Text>
      )}
    </View>
  );
}

export const fixtures = () => ({});
