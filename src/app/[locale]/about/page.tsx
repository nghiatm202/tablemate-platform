'use client';

import PageLayout from '@/components/PageLayout';
import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[460px]">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </div>
    </PageLayout>
  );
}
