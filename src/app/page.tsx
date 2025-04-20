import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

// FIX for https://github.com/vercel/next.js/issues/58615
// export const dynamic = 'force-dynamic'

export default function HomePage() {
  const t = useTranslations()
  return (
    <main>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex max-w-screen-md flex-col items-center gap-4 text-center">
          <h1 className="!leading-none font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl landing-header py-2">
            {t.rich('Homepage.title', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {t.rich('Homepage.description', {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="/groups">{t('Homepage.button.groups')}</Link>
            </Button>
          </div>

          {/* Google AdSense Ad Below CTA */}
          <div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7018337169293061"
                    crossOrigin="anonymous"></script>
            <ins className="adsbygoogle"
                 style={{ display: "block" }}
                 data-ad-client="ca-pub-7018337169293061"
                 data-ad-slot="4339224318"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>

        </div>
      </section>
    </main>
  )
}
