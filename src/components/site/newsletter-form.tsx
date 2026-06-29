'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex w-full md:w-auto"
      onSubmit={(e) => {
        e.preventDefault();
        if (email) {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => setSubmitted(false), 2400);
        }
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="输入你的邮箱"
        className="flex-1 md:w-72 bg-transparent border border-zebra-bone/30 px-4 py-3 text-sm text-zebra-bone placeholder:text-zebra-bone/40 focus:outline-none focus:border-zebra-amber"
      />
      <button
        type="submit"
        className="bg-zebra-amber text-zebra-ink px-5 py-3 text-sm font-semibold hover:brightness-95 transition-all"
      >
        {submitted ? '已订阅' : '订阅'}
      </button>
    </form>
  );
}
