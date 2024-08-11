import { getLocales } from '@utils/get-locales'

import { ParamsWithLocale } from '@interfaces/locale'

export async function generateMetadata({
  params: { locale },
}: {
  params: ParamsWithLocale
}) {
  const t = await getLocales(locale)

  return {
    title: t.Home.title,
    description: t.Home.description,
  }
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Hi!
    </main>
  )
}
