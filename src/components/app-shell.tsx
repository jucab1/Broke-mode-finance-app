"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { usePrototype } from "@/components/prototype-context";

const links = [
  ["/", "Home", "⌂"], ["/money", "Money", "◒"], ["/discover", "Discover", "✦"],
  ["/plans", "Plans", "◌"], ["/goals", "Goals", "◉"], ["/profile", "Profile", "☺"],
] as const;

export function AppShell({ current, title, eyebrow, children, action }: { current: string; title: string; eyebrow: string; children: ReactNode; action?: ReactNode }) {
  const { notice, setNotice } = usePrototype();
  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 3500);
    return () => window.clearTimeout(timer);
  }, [notice, setNotice]);
  return (
    <div className="app-frame">
      <aside className="sidebar">
        <Link className="wordmark" href="/"><span>•</span> broke mode</Link>
        <p className="sidebar-copy">Money, but make room for life.</p>
        <nav aria-label="Main navigation">{links.map(([href, label, icon]) => <Link key={href} href={href} className={current === href ? "nav-link active" : "nav-link"}><span aria-hidden="true">{icon}</span>{label}</Link>)}</nav>
        <div className="sidebar-tip"><span>✦</span><div><strong>Little win</strong><p>You kept $42.10 for future you this week.</p></div></div>
      </aside>
      <main className="main-content">
        <header className="page-header"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>{action}</header>
        {children}
      </main>
      <nav className="bottom-nav" aria-label="Mobile navigation">{links.slice(0, 5).map(([href, label, icon]) => <Link key={href} href={href} className={current === href ? "active" : ""}><span aria-hidden="true">{icon}</span><small>{label}</small></Link>)}</nav>
      {notice && <div className="toast" role="status">✓ {notice}</div>}
    </div>
  );
}
