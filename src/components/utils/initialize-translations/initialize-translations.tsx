import i18next, {
  type Module,
  type ThirdPartyModule,
  type i18n as TranslationType,
} from "i18next";
import i18nextDetector from "i18next-browser-languagedetector";
import chainedBackend from "i18next-chained-backend";
import type { TranslationOptions } from "~frontend/src/constants/translation-options/translation-options";
import translationsOptions from "~frontend/src/constants/translation-options/translation-options";

type InitTranslations = () => Promise<TranslationType>;
type SetupTranslation = <ModuleType extends Module>(
  argument: SetupTranslationArguments<ModuleType>,
) => Promise<TranslationType>;

const fixedI18NextDetector: ThirdPartyModule =
  i18nextDetector as unknown as ThirdPartyModule;
const fixedChainedBackend: ThirdPartyModule =
  chainedBackend as unknown as ThirdPartyModule;

type SetupTranslationArguments<ModuleType extends Module> = {
  translation: TranslationType;
  options: TranslationOptions;
  modules: ModuleType[];
};

export const setupTranslation: SetupTranslation = async <
  ModuleType extends Module,
>({
  translation,
  options,
  modules,
}: SetupTranslationArguments<ModuleType>): Promise<TranslationType> => {
  modules.forEach((module: ModuleType) => {
    translation = translation.use(module);
  });
  await translation.init(options);
  return translation;
};

const initializeTranslations: InitTranslations =
  async (): Promise<TranslationType> => {
    return await setupTranslation({
      translation: i18next,
      options: translationsOptions,
      modules: [fixedChainedBackend, fixedI18NextDetector],
    });
  };

export default initializeTranslations;
