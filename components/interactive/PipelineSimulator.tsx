"use client";
import { useState } from "react";
import { PIPELINE_DEMO_STEPS } from "@/lib/constants";

export function PipelineSimulator() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = PIPELINE_DEMO_STEPS[currentStep];

  return (
    <div className="w-full rounded-2xl border border-primary/30 bg-slate-950/95 overflow-hidden shadow-2xl shadow-black/60 font-mono">
      {/* Chrome Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-slate-100 uppercase tracking-wider">
            Multi-Agent Autonomous Pipeline (CartaGen Simulator)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
          Step {currentStep + 1} / {PIPELINE_DEMO_STEPS.length}
        </div>
      </div>

      {/* Pipeline Stepper Nodes */}
      <div className="p-5 pb-3 bg-slate-900/40 border-b border-slate-800/80 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[500px] gap-2">
          {PIPELINE_DEMO_STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(idx)}
              className={`flex-1 flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all cursor-pointer ${
                currentStep === idx
                  ? "bg-primary/15 border border-primary text-primary"
                  : idx < currentStep
                  ? "bg-slate-800/60 border border-emerald-500/40 text-emerald-400"
                  : "bg-slate-900/40 border border-slate-800 text-slate-500"
              }`}
            >
              <span className="size-6 rounded-full flex items-center justify-center text-xs font-bold border border-current">
                {idx < currentStep ? "✓" : idx + 1}
              </span>
              <span className="text-[10px] font-mono truncate max-w-[80px] text-center">
                {s.agent.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Stage Details */}
      <div className="p-6 space-y-4 min-h-[170px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {step.agent}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
              {step.status}
            </span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800 font-mono">
            {step.message}
          </p>
        </div>

        {/* Stepper Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="px-4 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 disabled:opacity-30 hover:border-primary transition-colors cursor-pointer"
          >
            ← Previous Step
          </button>

          <div className="flex items-center gap-2">
            {currentStep < PIPELINE_DEMO_STEPS.length - 1 ? (
              <button
                onClick={() => setCurrentStep((prev) => Math.min(PIPELINE_DEMO_STEPS.length - 1, prev + 1))}
                className="px-5 py-1.5 rounded-lg bg-primary text-slate-950 text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,255,255,0.3)]"
              >
                Execute Next Agent →
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(0)}
                className="px-5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all cursor-pointer"
              >
                ↻ Restart Pipeline
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
