interface GDPItem {
  country: string;
  value: number;
}

interface GDPBarItem extends GDPItem {
  size: number;
  color: string;
}

export { GDPItem, GDPBarItem };
