export interface LangProps {
  params: { lng: "en" | "kh" };
}

export type TType = (s: TranslationKeys) => string;

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

const initI18next = async (lng = "en", ns: any) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

async function useTranslation(lng = "en", ns: any, options?: any) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    //@ts-ignore
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance,
  };
}

import translations from "./locales/en/translation.json";

type Join<S1, S2> = S1 extends string ? (S2 extends string ? `${S1}.${S2}` : never) : never;

type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? Join<K, Paths<T[K]>> : K;
}[keyof T];

export type TranslationKeys = Paths<typeof translations>;

export const useTypeSafeTranslation = async (lng: string) => {
  const { t } = await useTranslation(lng, "translation");
  return { t: (s: TranslationKeys) => t(s) as string };
};
