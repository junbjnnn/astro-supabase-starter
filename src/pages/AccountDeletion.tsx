import { useTranslation } from 'react-i18next';

const AccountDeletion = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{t('accountDeletion.title')}</h1>
            <p className="mb-2">
                {t('accountDeletion.intro', { app: 'Sportime', developer: 'Sportime Team' })}
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">{t('accountDeletion.howTitle')}</h2>
            <ol className="list-decimal list-inside mb-4">
                <li>{t('accountDeletion.step1')}</li>
                <li>{t('accountDeletion.step2')}</li>
                <li>{t('accountDeletion.step3')}</li>
            </ol>
            <h2 className="text-xl font-semibold mt-6 mb-2">{t('accountDeletion.dataTitle')}</h2>
            <ul className="list-disc list-inside mb-4">
                <li>{t('accountDeletion.data1')}</li>
                <li>{t('accountDeletion.data2')}</li>
                <li>{t('accountDeletion.data3')}</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2">{t('accountDeletion.retentionTitle')}</h2>
            <p className="mb-2">
                {t('accountDeletion.retentionDesc')}
            </p>
            <p className="mt-6 text-sm text-gray-500">
                {t('accountDeletion.contact', { email: 'support@sportime.com' })}
            </p>
        </div>
    );
};

export default AccountDeletion;
