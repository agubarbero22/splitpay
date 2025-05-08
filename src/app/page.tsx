import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'

export default function HomePage() {
  const t = useTranslations()
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container flex max-w-screen-md flex-col items-center gap-4">
          <div className="text-center">
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
            <div className="flex justify-center gap-2 mt-6">
              <Button asChild size="lg">
                <Link href="/groups">{t('Homepage.button.groups')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Homepage.features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.features.groupExpenses.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.features.groupExpenses.description')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.features.splitPayments.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.features.splitPayments.description')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.features.receiptScanning.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.features.receiptScanning.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Homepage.howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.howItWorks.step1.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.howItWorks.step1.description')}</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.howItWorks.step2.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.howItWorks.step2.description')}</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.howItWorks.step3.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad placement after meaningful content */}
      <div className="container max-w-screen-md py-8">
        <AdBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="1781651221"
        />
      </div>

      {/* FAQ Section */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('Homepage.faq.title')}</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.faq.question1.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.faq.question1.answer')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.faq.question2.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.faq.question2.answer')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t('Homepage.faq.question3.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('Homepage.faq.question3.answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center max-w-screen-md">
          <h2 className="text-3xl font-bold mb-4">{t('Homepage.callToAction.title')}</h2>
          <p className="mb-8 text-lg">{t('Homepage.callToAction.description')}</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/groups">{t('Homepage.callToAction.button')}</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}