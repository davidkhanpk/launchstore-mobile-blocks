import React from "react";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductBreadcrumbs",
  label: "Breadcrumbs",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface ProductBreadcrumbsProps {
  /** Accepts a string array (data) or comma-separated string (editor field). */
  items?: string[] | string;
}

export function ProductBreadcrumbsBlock({ items }: ProductBreadcrumbsProps) {
  const crumbs =
    typeof items === 'string'
      ? items.split(',').map((s) => s.trim()).filter(Boolean)
      : (items ?? ['Home', 'Shop']);
  return (
    <Text numberOfLines={1} className="text-xs text-ls-text-primary opacity-50">
      {crumbs.join('  ›  ')}
    </Text>
  );
}

export const fixtures = () => ({});
