'use client';

import { ArrowRight, PlayCircle } from 'lucide-react';
import { Reveal } from './reveal';

const heroStats = [
  { value: '120亿+', label: '日均广告展示' },
  { value: '195+', label: '覆盖国家/地区' },
  { value: '10亿+', label: '全球真实用户' },
  { value: '32K+', label: '活跃广告主' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-zebra-ink text-zebra-bone"
    >
      {/* 斜向条纹装饰背景 */}
      <div
        aria-hidden
        className="absolute inset-0 stripes-bg-light opacity-60 drift"
      />
      <div
        aria-hidden
        className="absolute -right-20 -top-32 w-[520px] h-[520px] rounded-full bg-zebra-amber/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-1/2 stripes-bg-thin opacity-[0.08] text-zebra-bone pointer-events-none"
      />

      {/* 装饰条纹竖条 */}
      <div
        aria-hidden
        className="absolute right-10 top-20 hidden md:block w-40 h-[60vh] -rotate-12 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, var(--zebra-bone) 0, var(--zebra-bone) 6px, transparent 6px, transparent 18px)',
        }}
      />
      <div
        aria-hidden
        className="absolute right-52 top-32 hidden lg:block w-2 h-40 bg-zebra-amber rotate-12"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zebra-bone/30 text-xs md:text-sm uppercase tracking-widest text-zebra-bone/80 mb-6 md:mb-8">
                <span className="w-1.5 h-1.5 bg-zebra-amber rounded-full animate-pulse" />
                全新版本 Zebrads · 多源广告平台
              </div>
            </Reveal>

            <h1 className="font-sans font-black leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,5.25rem)]">
              <Reveal variant="mask" delay={100}>
                <span className="block">智能获客方案</span>
              </Reveal>
              <Reveal variant="mask" delay={250}>
                <span className="block mt-2">
                  覆盖全球
                  <span className="relative inline-block mx-2 font-display text-zebra-amber">
                    10亿+
                    <span
                      aria-hidden
                      className="absolute -bottom-2 left-0 right-0 h-2 stripes-bg-ember"
                    />
                  </span>
                  用户
                </span>
              </Reveal>
            </h1>

            <Reveal delay={500}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-zebra-bone/75 leading-relaxed">
                Zebrads 是面向全球市场的多源广告平台。结合反欺诈算法、智能出价与多格式素材，为开发者、电商、品牌方提供从曝光到转化的完整增长链路——像斑马群一样，覆盖辽阔，精准识别。
              </p>
            </Reveal>

            <Reveal delay={650}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#start"
                  className="group inline-flex items-center gap-2 bg-zebra-amber text-zebra-ink px-7 py-4 text-base font-semibold shadow-hard hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-300"
                >
                  立即开始投放
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="group inline-flex items-center gap-2 border border-zebra-bone/40 text-zebra-bone px-7 py-4 text-base font-semibold hover:bg-zebra-bone hover:text-zebra-ink transition-all duration-300"
                >
                  <PlayCircle className="h-5 w-5" />
                  观看产品演示
                </a>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                {heroStats.map((s) => (
                  <div key={s.label} className="relative pl-4">
                    <span
                      aria-hidden
                      className="absolute left-0 top-1 bottom-1 w-0.5 bg-zebra-amber"
                    />
                    <div className="font-display text-2xl md:text-3xl font-bold text-zebra-bone">
                      {s.value}
                    </div>
                    <div className="text-xs md:text-sm text-zebra-bone/60 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 右侧视觉装饰区 */}
          <div className="lg:col-span-5 xl:col-span-5 relative hidden lg:block">
            <Reveal variant="right" delay={400}>
              <div className="relative aspect-square">
                {/* 大圆环 */}
                <div className="absolute inset-0 rounded-full border-2 border-zebra-bone/15" />
                <div className="absolute inset-8 rounded-full border border-zebra-bone/10" />
                <div className="absolute inset-16 rounded-full border border-zebra-bone/10" />

                {/* 中心斑马图案 */}
                <div className="absolute inset-20 rounded-full overflow-hidden border-2 border-zebra-amber/60 shadow-hard-amber">
                  <div className="absolute inset-0 stripes-bg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zebra-ink/40 to-zebra-ink" />
                </div>

                {/* 装饰标签 */}
                <div className="absolute top-6 right-0 bg-zebra-bone text-zebra-ink px-4 py-2 text-xs font-semibold shadow-hard-sm">
                  ⚡ 反欺诈引擎运行中
                </div>
                <div className="absolute bottom-12 left-0 bg-zebra-amber text-zebra-ink px-4 py-2 text-xs font-semibold shadow-hard-sm">
                  📈 +287% 转化提升
                </div>
                <div className="absolute top-1/2 -right-4 bg-zebra-ink border border-zebra-bone/40 text-zebra-bone px-4 py-2 text-xs font-semibold">
                  日活流量 1.2B
                </div>

                {/* 飘动粒子点 */}
                <div className="absolute top-12 left-12 w-2 h-2 bg-zebra-amber rounded-full" />
                <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-zebra-grass rounded-full" />
                <div className="absolute top-1/3 right-8 w-1 h-1 bg-zebra-bone rounded-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 底部条纹切割 */}
      <div
        aria-hidden
        className="relative h-6 stripes-bg"
        style={{ transform: 'skewY(-1.5deg)', transformOrigin: 'left bottom' }}
      />
    </section>
  );
}
