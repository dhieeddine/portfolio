"use client";
import { useState } from "react";
import { PIPELINE_DEMO_STEPS } from "@/lib/constants";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

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
      <div className="p-6 space-y-4 min-h-[220px] flex flex-col justify-between">
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

          {/* Phase 6 Livrable Cartographique: Affichage de la carte annuelle de CartaGen */}
          {step.step === 6 && (
            <div className="mt-5 p-5 rounded-2xl bg-slate-900/90 border border-primary/40 shadow-xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-primary flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Livrable Cartographique Généré (DGRE - Annuaire Hydrologique)
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Interpolation IDW &amp; Isohyètes
                </span>
              </div>

              {/* Conteneur de l'image de la carte annuelle */}
              <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 group">
                <ZoomableImage
                  src="/carte_annuelle.png"
                  alt="Carte annuelle pluviométrique générée par le système CartaGen - DGRE"
                  className="w-full h-full"
                  objectFit="contain"
                />
                <div className="absolute bottom-3 right-3 pointer-events-none bg-slate-950/85 px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-300 border border-primary/30 flex items-center gap-1.5 shadow-lg">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/>
                  </svg>
                  Cliquez pour agrandir en plein écran
                </div>
              </div>

              {/* Métadonnées & Téléchargement */}
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800 gap-2">
                <span>Ressource : carte_annuelle.png (Haute Définition)</span>
                <a
                  href="/carte_annuelle.png"
                  download="carte_annuelle_cartagen_dgre.png"
                  className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1.5 font-bold"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Télécharger la carte HD
                </a>
              </div>
            </div>
          )}
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
