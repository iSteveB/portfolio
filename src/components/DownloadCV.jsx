import { useTranslation } from 'react-i18next';
import curriculumVitae from '../assets/download/cv-steve-basse.pdf';

const DownloadCV = () => {
    const { t } = useTranslation('translation');

    return (
        <div className='download-cv'>
            <form method='get' action={curriculumVitae} target='_blank'>
                <button type='submit'>{t('common.cv')}</button>
            </form>
        </div>
    );
};

export default DownloadCV;
