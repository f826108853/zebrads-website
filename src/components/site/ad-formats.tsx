'use client';

import { useState } from 'react';
import {
  MousePointer2,
  BellRing,
  Smartphone,
  LayoutPanelTop,
  ClipboardList,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from './reveal';

const formats = [
  {
    id: 'popunder',
    name: '弹窗广告',
    icon: MousePointer2,
    short: 'Popunder',
    headline: '高覆盖率 · 极低 CPM',
    intro:
      '当用户在网页触发动作时，广告以新窗口的形式呈现，触达效率极高，是大流量曝光与转化测试的首选格式。',
    points: [
      '兼容桌面、移动、Web 全场景',
      '反作弊过滤已默认启用',
      '平均 CPM 低于行业 35%',
      '支持地理、设备、运营商精细分层',
    ],
  },
  {
    id: 'in-page',
    name: '页面内推送',
    icon: LayoutPanelTop,
    short: 'In-Page Push',
    headline: '兼容全平台，含 iOS / macOS',
    intro:
      '不依赖订阅授权，直接以网页内推送条样式触达，原生型展示，点击率比普通 Banner 高出 4 倍以上。',
    points: [
      '无需用户订阅，触达更广',
      'iOS / macOS 同样可投',
      '原生贴片样式，与内容融合',
      '点击率均值 1.8% - 4.5%',
    ],
  },
  {
    id: 'push',
    name: '推送提醒',
    icon: BellRing,
    short: 'Web Push',
    headline: '用户离线也能精准触达',
    intro:
      '基于浏览器订阅的真实用户列表，可重复触达、可分时间段投放。配合自动化规则，是私域唤醒最佳工具。',
    points: [
      '可追溯用户订阅时间与渠道',
      '支持冷热分桶与频次控制',
      '离线下发，唤醒沉睡用户',
      '兼容 Chrome / Firefox / Edge / 国产浏览器',
    ],
  },
  {
    id: 'interstitial',
    name: '弹窗覆盖广告',
    icon: Smartphone,
    short: 'Interstitial',
    headline: '全屏沉浸，视觉冲击力强',
    intro:
      '在页面切换的间隙以全屏覆盖形式出现，可承载图片、视频与互动素材，是品牌曝光与游戏导量的利器。',
    points: [
      '全屏布局，承载视频/互动素材',
      '原生关闭按钮，体验友好',
      '适合品牌广告与游戏分发',
      '可与素材 AB 测试联动',
    ],
  },
  {
    id: 'survey',
    name: '问卷调查广告',
    icon: ClipboardList,
    short: 'Survey Exit',
    headline: '互动收集，转化更精准',
    intro:
      '以问卷或选择题的形式与用户互动，用户在选择过程中即完成意图筛选，落地页转化率显著提升。',
    points: [
      '互动率高于传统素材 6 倍',
      '可作为用户意图过滤器',
      '支持多步问卷流程',
      '配合 CRM 自动打标签',
    ],
  },
] as const;

export function AdFormats() {
  const [active, setActive] = useState<string>(formats[0].id);
  const current = formats.find((f) => f.id === active) ?? formats[0];

  return (
    <section
      id="ad-formats"
      className="relative bg-zebra-ink text-zebra-bone py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 stripes-bg-light opacity-50 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-20 w-[420px] h-[420px] rounded-full bg-zebra-amber/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-14 md:mb-16">
          <Reveal>
            <div className="inline-block px-3 py-1 bg-zebra-amber text-zebra-ink text-xs font-semibold tracking-widest uppercase mb-5">
              广告形式
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-black text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              五种格式，
              <br />
              覆盖每一个触达场景。
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg text-zebra-bone/70 max-w-2xl leading-relaxed">
              从轻量原生到全屏沉浸，每一种 Zebrads
              广告格式都经过反复 A/B 验证。点击下方标签，看哪种形式最适合你的业务。
            </p>
          </Reveal>
        </div>

        {/* Tab 导航 */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-10 md:mb-14 -mx-6 md:mx-0 px-6 md:px-0">
          {formats.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`shrink-0 group inline-flex items-center gap-2 px-5 py-3 border text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-zebra-amber text-zebra-ink border-zebra-amber'
                    : 'bg-transparent text-zebra-bone/80 border-zebra-bone/20 hover:border-zebra-bone/60 hover:text-zebra-bone'
                }`}
              >
                <f.icon className="h-4 w-4" strokeWidth={1.75} />
                {f.name}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* 左侧文字 */}
          <div key={current.id} className="lg:col-span-7">
            <Reveal>
              <div className="text-xs font-display font-semibold tracking-widest text-zebra-amber uppercase mb-3">
                {current.short}
              </div>
              <h3 className="font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
                {current.headline}
              </h3>
              <p className="text-base md:text-lg text-zebra-bone/75 leading-relaxed mb-8 max-w-xl">
                {current.intro}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {current.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm md:text-base text-zebra-bone/90"
                  >
                    <span className="mt-0.5 shrink-0 w-5 h-5 bg-zebra-amber text-zebra-ink flex items-center justify-center">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                className="group inline-flex items-center gap-2 bg-zebra-bone text-zebra-ink px-6 py-3.5 text-sm font-semibold hover:bg-zebra-amber transition-colors"
              >
                了解 {current.name} 详情
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

          {/* 右侧视觉展示 */}
          <div className="lg:col-span-5">
            <Reveal variant="right" key={`${current.id}-visual`}>
              <div className="relative aspect-[5/6] max-w-md mx-auto">
                <div
                  aria-hidden
                  className="absolute -top-3 -left-3 right-6 bottom-6 stripes-bg"
                />
                <div className="absolute top-0 left-0 right-3 bottom-3 bg-zebra-bone text-zebra-ink p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zebra-stone/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zebra-stone/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zebra-amber" />
                    </div>
                    <span className="text-[10px] font-display font-semibold tracking-widest text-zebra-stone uppercase">
                      Preview · {current.short}
                    </span>
                  </div>
                  <div className="flex-1 border-2 border-zebra-ink relative overflow-hidden">
                    <div className="absolute inset-0 stripes-bg-soft" />
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                      <current.icon
                        className="h-16 w-16 text-zebra-ink mb-4"
                        strokeWidth={1.5}
                      />
                      <div className="text-xs font-semibold tracking-widest uppercase text-zebra-stone mb-2">
                        {current.short}
                      </div>
                      <div className="font-bold text-lg leading-snug mb-3">
                        {current.headline}
                      </div>
                      <button
                        type="button"
                        className="mt-2 px-5 py-2 bg-zebra-amber text-zebra-ink text-xs font-bold"
                      >
                        立即查看 →
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="font-display font-bold text-lg">
                        {current.id === 'popunder'
                          ? '$0.4'
                          : current.id === 'in-page'
                            ? '2.8%'
                            : current.id === 'push'
                              ? '1.2B'
                              : current.id === 'interstitial'
                                ? '12s'
                                : '6×'}
                      </div>
                      <div className="text-[10px] text-zebra-stone uppercase tracking-wider">
                        {current.id === 'popunder'
                          ? 'CPM'
                          : current.id === 'in-page'
                            ? 'CTR'
                            : current.id === 'push'
                              ? '日触达'
                              : current.id === 'interstitial'
                                ? '驻留'
                                : '互动率'}
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-zebra-amber">
                        +287%
                      </div>
                      <div className="text-[10px] text-zebra-stone uppercase tracking-wider">
                        转化提升
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg">195+</div>
                      <div className="text-[10px] text-zebra-stone uppercase tracking-wider">
                        覆盖地区
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
