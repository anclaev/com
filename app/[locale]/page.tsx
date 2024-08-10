import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

import { ParamsWithLocale } from '@interfaces/locale'

export async function generateMetadata({
  params: { locale },
}: {
  params: ParamsWithLocale
}) {
  const t = await getTranslations({ locale, namespace: 'Home' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Hi!
    </main>
  )
}
