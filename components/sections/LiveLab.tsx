"use client";
import { useState } from "react";
import { TerminalSimulator } from "@/components/interactive/TerminalSimulator";
import { PipelineSimulator } from "@/components/interactive/PipelineSimulator";

export function LiveLab() {
  const [activeTab, setActiveTab] = useState<"terminal" | "pipeline">("pipeline");

  return (
    <section id="livelab" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
          <span className="size-2 rounded-full bg-primary animate-ping" />
          // INTERACTIVE_SANDBOX &amp; LIVE_LAB
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
          Interactive <span className="text-primary">Live Lab</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3 text-base">
          Test autonomous agent execution flows and query the interactive engineer terminal in real time.
        </p>

        {/* Simulator Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-8">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === "pipeline"
                ? "bg-primary text-slate-950 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            [1] Multi-Agent Pipeline Simulator
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === "terminal"
                ? "bg-primary text-slate-950 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            [2] Interactive CLI Shell
          </button>
        </div>
      </div>

      {/* Display Active Simulator */}
      <div className="max-w-4xl mx-auto">
        {activeTab === "pipeline" ? <PipelineSimulator /> : <TerminalSimulator />}
      </div>
    </section>
  );
}
