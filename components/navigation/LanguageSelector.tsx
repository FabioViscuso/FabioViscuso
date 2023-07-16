import Image from "next/image";
import { useRouter } from "next/router";

import icons from "../ui/IconImport";

export function LanguageSelector() {
  const router = useRouter();

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const changeTo = router.locale === "en" ? "it" : "en";

  return (
    <button
      onClick={() => onToggleLanguageClick(changeTo)}
      title="language-switch"
      className="flex justify-center items-center w-16 h-16 p-2 hover:bg-slate-500 hover:bg-opacity-40 text-gray-800 transition-all"
    >
      {router.locale === "en" && (
        <Image src={icons.flagit} width={40} height={40} alt={""} />
      )}
      {router.locale === "it" && (
        <Image src={icons.flaguk} width={40} height={40} alt={""} />
      )}
    </button>
  );
}
