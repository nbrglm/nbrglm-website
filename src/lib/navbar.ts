import type { IconName } from "./components/icon";

export type NavbarItem = {
  title: string;
  url: string;
  icon?: IconName;
  submenu?: Omit<NavbarItem, "submenu">[];
}