import React from 'react';
import { useTranslation } from 'react-i18next';

function HelloWorld() {
  const { t } = useTranslation();

  return <h1>{t('ui:title')}</h1>;
}

export default HelloWorld;
