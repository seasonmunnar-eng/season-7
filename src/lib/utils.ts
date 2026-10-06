export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatAED(value: string) {
  return `AED ${value}`;
}
