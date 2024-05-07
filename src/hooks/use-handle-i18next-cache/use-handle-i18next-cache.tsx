import isEmpty from "lodash";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import localStorage from "store2";

const useHandleI18NextCache = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const { translations: englishTranslations } = i18n.getDataByLanguage(
      "en",
    ) as {
      translations: Record<string, unknown>;
    };
    !isEmpty(englishTranslations) &&
      localStorage.set(`i18next_res_en-translations`, englishTranslations);
    if (i18n.language !== "en") {
      const { translations } = i18n.getDataByLanguage(i18n.language) as {
        translations: Record<string, unknown>;
      };
      !isEmpty(englishTranslations) &&
        localStorage.set(
          `i18next_res_${i18n.language}-translations`,
          translations,
        );
    }
  }, [i18n]);
};

export default useHandleI18NextCache;
