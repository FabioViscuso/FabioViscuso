// import translation function
import { useTranslation, Trans } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center py-10 px-4 bg-dark text-center">
      <p>
        {t("footer-main")}
        <a
          className="inline-block font-bold underline hover:scale-[1.1] hover:mx-2 transition-all"
          href="https://github.com/FabioViscuso/FabioViscuso"
        >
          &nbsp;{t("footer-link")}
        </a>
        !
      </p>
      <p className="mt-1">🚧 {t("footer-notice")} 🚧</p>
    </div>
  );
}
