"use client";

// import translation function
import { useTranslation } from "../../app/i18n/client";

import { usePathname } from "next/navigation";

export default function Footer({ currLang }: { currLang: string }) {
  const { t } = useTranslation(currLang, "common", {});
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === `/${currLang}/board` ||
        pathname === `/${currLang}/new-postit`
          ? "bg-notebook "
          : " text-gray-100 "
      } flex flex-col items-center pb-10 pt-28 px-4 bg-dark text-center`}
    >
      <p>
        {t("footer-main")}
        &nbsp;
        <a
          className="inline-block font-bold underline hover:scale-[1.1] hover:mx-2 transition-all whitespace-nowrap"
          href="https://github.com/FabioViscuso/FabioViscuso"
        >
          {t("footer-link")}
        </a>
        !
      </p>
      <p className="mt-1">🚧 {t("footer-notice")} 🚧</p>
    </div>
  );
}
