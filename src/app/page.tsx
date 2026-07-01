import { SiteHeader } from '@/components/site/site-header';
import { Hero } from '@/components/site/hero';
import { Features } from '@/components/site/features';
import { AdFormats } from '@/components/site/ad-formats';
import { Solutions } from '@/components/site/solutions';
import { CtaBanner } from '@/components/site/cta-banner';

export default function Home() {
  return (
    <div className="min-h-screen bg-zebra-bone text-zebra-ink overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <AdFormats />
        <Solutions />
        <CtaBanner />
      </main>
    </div>
  );
}
