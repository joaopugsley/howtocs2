export default function (slug: string) {
  return useRouter().push("/p/" + slug);
}