import { SiteHeader } from '@/components/site/site-header';
import { Hero } from '@/components/site/hero';
import { Features } from '@/components/site/features';
import { AdFormats } from '@/components/site/ad-formats';
import { Solutions } from '@/components/site/solutions';
import { Partners } from '@/components/site/partners';
import { Blog } from '@/components/site/blog';
import { CtaBanner } from '@/components/site/cta-banner';
import { SiteFooter } from '@/components/site/site-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zebra-bone text-zebra-ink overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <AdFormats />
        <Solutions />
        <Partners />
        <Blog />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
