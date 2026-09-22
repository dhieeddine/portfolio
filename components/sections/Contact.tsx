"use client";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          // INITIATE_HANDSHAKE.sh
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
          Let&apos;s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-slate-400 mt-2 text-base max-w-lg">
          Open to engineering challenges, AI research collaborations, and software architecture opportunities.
        </p>
      </div>

      <div className="p-8 rounded-2xl border border-primary/20 bg-slate-900/70 backdrop-blur-md shadow-2xl shadow-black/40">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans transition-all"
                placeholder="e.g. Alex Smith"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans transition-all"
                placeholder="alex@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
              Message Content
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm font-sans transition-all resize-none"
              placeholder="Describe your project, inquiry or collaboration..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 text-slate-950 font-bold text-base transition-all hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            {status === "loading" ? "Dispatching Message..." : "Send Transmission →"}
          </button>

          {status === "success" && (
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-sm font-mono text-center">
              ✓ Transmission received! I will respond promptly.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-xl border border-red-500/30 bg-red-950/40 text-red-300 text-sm font-mono text-center">
              ⚠ Transmission failed. Email directly:{" "}
              <a href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn" className="text-primary underline">
                dhiaeddine.barhoumi@etudiant-enit.utm.tn
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
