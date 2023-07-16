// import translation function
import { useTranslation } from "react-i18next";

import usePathname from "next/router";

export default function Footer() {
  const { t } = useTranslation();
  const router = usePathname;

  return (
    <div className={`${(router.pathname === "/board" || router.pathname === "/new-postit") ? "bg-notebook " : " text-gray-100 "} flex flex-col items-center pb-10 pt-28 px-4 bg-dark text-center`}>
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
