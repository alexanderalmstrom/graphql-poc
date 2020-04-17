import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import classNames from 'classnames';

import styles from './language.module.scss';

const languageNames = {
  en: 'EN',
  sv: 'SV',
};

const Language = () => (
  <div className={styles.language}>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => languages.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => changeLocale(language)}
          className={classNames(styles.button, {
            [styles.isSelected]: currentLocale === language,
          })}
        >
          {languageNames[language]}
        </button>
      )) }
    </IntlContextConsumer>
  </div>
);

export default Language;
