import type { ReactNode } from "react";

export function PrototypeNote({ children }: { children?: ReactNode }) { return <p className="prototype-note"><span>◌</span>{children ?? "Sample data only — this prototype is not connected to a bank or shared account."}</p>; }
export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={`button ${className}`} {...props}>{children}</button>; }
export function Progress({ value, tint = "lime" }: { value: number; tint?: string }) { return <div className="progress" aria-label={`${Math.round(value)}% complete`} role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}><span className={`progress-fill ${tint}`} style={{ width: `${Math.min(value, 100)}%` }} /></div>; }
export function Empty({ title, copy }: { title: string; copy: string }) { return <div className="empty"><span>⌁</span><h3>{title}</h3><p>{copy}</p></div>; }
