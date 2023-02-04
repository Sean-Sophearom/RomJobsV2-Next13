"use client";

import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./settings";
import { TranslationKeys } from ".";

//
i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init(getOptions());

function useTranslation(lng: string, ns = "translation", options = {}) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
  //@ts-ignore
  return useTranslationOrg(ns, options);
}

export function useTypeSafeTranslation(lng: string) {
  const { t } = useTranslation(lng, "translation");
  return { t: (s: TranslationKeys) => t(s) as string };
}
