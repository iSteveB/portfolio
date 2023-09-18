import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' }
};

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    return (
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} className={ i18n.resolvedLanguage === lng ? 'french' : 'english' } type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
    );
};

export default LanguageSwitcher;