export default function (date: string): string {
  return new Date(date).toLocaleDateString("pt-br", { timeZone: "UTC" });
}