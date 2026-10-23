"use client";

import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { activities, money } from "@/lib/data";
import { usePrototype } from "@/components/prototype-context";
import { Progress, PrototypeNote } from "@/components/ui";

const bars = [54, 76, 43, 65, 32, 58, 47];

export function Dashboard() {
  const { transactions, goals } = usePrototype();
  return <AppShell current="/" eyebrow="YOUR WEEK, IN ONE BREATH" title="Hey, Maya. You’ve got this.">
    <PrototypeNote />
    <section className="hero-grid">
      <article className="balance-card"><div className="balance-top"><span>Available to enjoy this week</span><span className="pill dark">sample</span></div><strong>{money(42.1)}</strong><p>After your planned basics. No shame, just a helpful number.</p><div className="balance-foot"><span>Weekly plan <b>{money(65)}</b></span><span>Spent <b>{money(22.9)}</b></span></div></article>
      <article className="quick-card"><p className="eyebrow">MAKE A PLAN</p><h2>Fun that fits<br />your week.</h2><p>Start with what feels doable.</p><Link href="/discover" className="button lime-link">Find ideas <span>→</span></Link></article>
    </section>
    <section className="content-grid dashboard-grid"><article className="panel spending-panel"><div className="section-heading"><div><p className="eyebrow">SPENDING PULSE</p><h2>This week</h2></div><span className="soft-pill">↓ 12% vs last week</span></div><div className="chart"><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div><div className="chart-bars">{bars.map((height, index) => <div key={index} className="bar-wrap"><span style={{ height: `${height}%` }} className={index === 4 ? "bar accent" : "bar"} /></div>)}</div><p className="chart-total">{money(22.9)} <span>spent so far</span></p></div></article>
      <article className="panel category-panel"><div className="section-heading"><div><p className="eyebrow">WHERE IT WENT</p><h2>Small things add up</h2></div></div><div className="donut-and-legend"><div className="donut"><span>{money(82)}<small>this month</small></span></div><ul className="legend"><li><i className="food" />Food <b>42%</b></li><li><i className="fun" />Fun <b>26%</b></li><li><i className="move" />Transport <b>18%</b></li><li><i className="other" />Other <b>14%</b></li></ul></div></article>
    </section>
    <section className="content-grid lower-grid"><article className="panel"><div className="section-heading"><div><p className="eyebrow">RECENT MOVES</p><h2>Money in, money out</h2></div><Link href="/money">See all →</Link></div><div className="transaction-list">{transactions.slice(0, 4).map((transaction) => <div className="transaction" key={transaction.id}><span className={`category-icon ${transaction.category.toLowerCase()}`}>{transaction.category === "Income" ? "↑" : transaction.category[0]}</span><div><b>{transaction.name}</b><small>{transaction.category} · {transaction.date}</small></div><strong className={transaction.kind}>{transaction.kind === "income" ? "+" : "−"}{money(transaction.amount)}</strong></div>)}</div></article>
      <article className="panel goal-mini"><div className="section-heading"><div><p className="eyebrow">SAVING UP</p><h2>{goals[0]?.name}</h2></div><Link href="/goals">Goals →</Link></div><div className="goal-number"><strong>{money(goals[0]?.saved ?? 0)}</strong><span>of {money(goals[0]?.target ?? 0)}</span></div><Progress value={((goals[0]?.saved ?? 0) / (goals[0]?.target ?? 1)) * 100} /><p>Every little bit counts. You’re {Math.round(((goals[0]?.saved ?? 0) / (goals[0]?.target ?? 1)) * 100)}% there.</p></article></section>
    <section className="activity-strip"><div className="section-heading"><div><p className="eyebrow">LOW-BUDGET JOY</p><h2>What could you do?</h2></div><Link href="/discover">Explore all ideas →</Link></div><div className="mini-activities">{activities.slice(0, 3).map((activity) => <article key={activity.id} className="mini-activity"><span>{activity.type === "Outdoor" ? "☼" : activity.type === "At home" ? "⌂" : "✦"}</span><div><b>{activity.title}</b><small>From {money(activity.cost)} · {activity.duration}</small></div></article>)}</div></section>
  </AppShell>;
}
