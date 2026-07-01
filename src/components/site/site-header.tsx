'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ZebradsLogo } from './logo';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '广告形式', href: '#ad-formats' },
  { label: '解决方案', href: '#solutions' },
  { label: '关于我们', href: '#about' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zebra-bone/90 backdrop-blur-md border-b border-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center text-zebra-ink">
          <ZebradsLogo className="h-7 md:h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-zebra-ink/80 hover:text-zebra-ink transition-colors group py-2"
            >
              {item.label}
              <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-zebra-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#login"
            className="text-sm font-medium text-zebra-ink/80 hover:text-zebra-ink transition-colors px-3 py-2"
          >
            登录
          </a>
          <a
            href="#start"
            className="group inline-flex items-center gap-2 bg-zebra-ink text-zebra-bone px-5 py-2.5 text-sm font-semibold hover:bg-zebra-amber hover:text-zebra-ink transition-all duration-300 shadow-hard-sm hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            开始投放
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button
          type="button"
          aria-label="切换菜单"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-zebra-ink p-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10 bg-zebra-bone">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-zebra-ink/90 border-b border-black/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#start"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-zebra-ink text-zebra-bone px-5 py-3 text-sm font-semibold"
            >
              开始投放 <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
