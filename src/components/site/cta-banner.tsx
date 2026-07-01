import { ArrowRight } from 'lucide-react';
import { Reveal } from './reveal';

export function CtaBanner() {
  return (
    <section
      id="start"
      className="relative bg-zebra-amber text-zebra-ink py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 stripes-bg-thin opacity-30 text-zebra-ink"
      />
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-[40px] border-zebra-ink/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full border-[24px] border-zebra-ink/10"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-8">
            <h2 className="font-black text-[clamp(2rem,4.8vw,4rem)] leading-[1.02] tracking-tight">
              立即加入 Zebrads，
              <br />
              开启全球获客之旅。
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-zebra-ink/80 leading-relaxed">
              5 分钟开户、专属客户经理，让你的下一波用户增长，从这里开始。
            </p>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-4" delay={200}>
            <div className="flex flex-col gap-4">
              <a
                href="#contact-sales"
                className="group inline-flex items-center justify-between gap-3 bg-zebra-ink text-zebra-bone px-7 py-5 text-base font-semibold shadow-hard hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-300"
              >
                <span>联系销售团队</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
