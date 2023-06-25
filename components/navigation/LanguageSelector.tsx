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
      className="flex justify-center items-center w-16 h-16 p-4 text-lg bg-gradient-to-bl from-[#2dd4bf99] to-[#34d39999] hover:from-[#2dd4bfdd] hover:to-[#34d399dd] rounded-full text-gray-800 font-semibold backdrop-blur-sm bg-opacity-50 transition-all"
    >
      {router.locale === "en" && (
        <Image src={icons.flagit} width={30} height={30} alt={""} />
      )}
      {router.locale === "it" && (
        <Image src={icons.flaguk} width={30} height={30} alt={""} />
      )}
    </button>
  );
}
