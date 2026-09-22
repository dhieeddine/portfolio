"use client";
import { useState, useRef, useEffect } from "react";
import { RESEARCH_PAPER, FLAGSHIP_PROJECTS } from "@/lib/constants";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function TerminalSimulator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-primary font-bold">Dhia Eddine Barhoumi :: Engineering Shell v2.4 (ENIT)</p>
          <p className="text-slate-400">Type <span className="text-primary font-bold">&apos;help&apos;</span> to discover available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function handleCommand(cmd: string) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed.toLowerCase()) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-primary font-bold">AVAILABLE COMMANDS:</p>
            <p>• <span className="text-primary font-mono">cat skills.sh</span> : Dump full engineering technical stack</p>
            <p>• <span className="text-primary font-mono">fetch-projects</span> : Query all 6 flagship engineering systems</p>
            <p>• <span className="text-primary font-mono">show-paper</span> : Display IEEE AIDIST 2026 accepted research paper</p>
            <p>• <span className="text-primary font-mono">run-agent-demo</span> : Simulate CartaGen multi-agent supervisor pipeline</p>
            <p>• <span className="text-primary font-mono">whoami</span> : Information about Dhia Eddine Barhoumi</p>
            <p>• <span className="text-primary font-mono">sudo hire</span> : Direct contact handshake for recruiters</p>
            <p>• <span className="text-primary font-mono">clear</span> : Clear terminal display</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-primary font-bold">Dhia Eddine Barhoumi</p>
            <p>Software Engineering Student @ ENIT (École Nationale d&apos;Ingénieurs de Tunis).</p>
            <p>Specialized in Multi-Agent AI, RAG, Computer Vision (YOLOv8), PostGIS, Hexagonal Architecture &amp; DevOps.</p>
            <p>Location: Tunis, Tunisia | GitHub: @dhieeddine</p>
          </div>
        );
        break;

      case "cat skills.sh":
      case "skills":
        output = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-300">[AI &amp; RAG] : Multi-Agent Supervisor, Text-to-SQL, AST Validator, Hybrid RAG, FAISS, BM25, Ollama</p>
            <p className="text-emerald-300">[Vision &amp; Spatial] : YOLOv8 (98.4% Acc), OpenCV, Tesseract OCR, PostGIS, IDW, Thiessen Polygons</p>
            <p className="text-amber-300">[Backend] : FastAPI, Spring Boot 3.5, Java 21, Node.js, Hexagonal Arch, DDD, Jakarta EE</p>
            <p className="text-purple-300">[Frontend] : Next.js, React, Angular 20, TypeScript, Tailwind CSS, Material Design</p>
            <p className="text-primary">[DevOps &amp; Cloud] : Docker Compose, Terraform (AWS), Ansible, Jinja2, Containerlab, CI/CD</p>
          </div>
        );
        break;

      case "fetch-projects":
        output = (
          <div className="text-xs space-y-2 font-mono">
            <p className="text-primary font-bold">SYNCED PROJECTS (6):</p>
            {FLAGSHIP_PROJECTS.map((p) => (
              <div key={p.slug} className="p-2 rounded bg-slate-800/80 border border-slate-700">
                <span className="text-primary font-bold">{p.title}</span> ({p.org})
                <p className="text-slate-300 text-[11px] mt-0.5">{p.subtitle}</p>
                <p className="text-slate-400 text-[10px]">Arch: {p.architecture}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "show-paper":
        output = (
          <div className="text-xs space-y-2 p-3 rounded-xl bg-slate-950 border border-primary/30">
            <span className="text-emerald-400 font-bold font-mono">[ACCEPTED - IEEE AIDIST 2026]</span>
            <p className="text-slate-100 font-bold">{RESEARCH_PAPER.title}</p>
            <p className="text-slate-400 font-mono text-[11px]">Authors: {RESEARCH_PAPER.authors.join(", ")}</p>
            <p className="text-slate-300 text-[11px] leading-relaxed mt-1">{RESEARCH_PAPER.abstract}</p>
          </div>
        );
        break;

      case "run-agent-demo":
        output = (
          <div className="text-xs space-y-1.5 font-mono text-slate-300 p-3 rounded-xl bg-slate-950 border border-primary/20">
            <p className="text-cyan-400">[PROMPT] &gt; &quot;Génère la carte isohyète du bassin Medjerda 2024&quot;</p>
            <p className="text-amber-400">[SUPERVISOR] &gt; Dispatch: Intent=Spatial + TimeSeries SQL Grounding</p>
            <p className="text-emerald-400">[SQL AGENT] &gt; Querying PostGIS (18 stations retrieved)</p>
            <p className="text-indigo-400">[SPATIAL AGENT] &gt; IDW Interpolation grid computed (mesh=500x500)</p>
            <p className="text-green-400">[AST VALIDATOR] &gt; Parsing Python AST: 0 security violations detected. Safe.</p>
            <p className="text-primary font-bold">[RENDERER] &gt; Map generated &amp; LaTeX bulletin compiled to PDF.</p>
          </div>
        );
        break;

      case "sudo hire":
        output = (
          <div className="text-xs space-y-1 font-mono text-slate-200">
            <p className="text-primary font-bold">Handshake acknowledged. Ready for technical interview &amp; engineering challenges.</p>
            <p>Email: <a href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn" className="text-cyan-400 underline">dhiaeddine.barhoumi@etudiant-enit.utm.tn</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/dhia-eddine-barhoumi-511b5b360" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">dhia-eddine-barhoumi</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400 font-mono">
            zsh: command not found: {trimmed}. Type &apos;help&apos; for list.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput("");
  }

  return (
    <div className="w-full rounded-2xl border border-primary/30 bg-slate-950/95 overflow-hidden shadow-2xl shadow-black/60 font-mono text-sm">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-slate-400 ml-2 font-mono">dhieeddine@enit:~ (zsh)</span>
        </div>
        <span className="text-[10px] text-primary/80 font-mono">Interactive CLI Simulator</span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-emerald-400">dhieeddine@enit:~$</span>
              <span className="text-slate-100">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
        }}
        className="flex items-center gap-2 px-5 py-3 border-t border-slate-800 bg-slate-900/60"
      >
        <span className="text-emerald-400 text-xs shrink-0">dhieeddine@enit:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'cat skills.sh', 'run-agent-demo'..."
          className="flex-1 bg-transparent text-slate-100 text-xs font-mono focus:outline-none placeholder-slate-600"
          autoFocus={false}
        />
        <button
          type="submit"
          className="text-xs font-mono px-3 py-1 rounded bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
        >
          Run ↵
        </button>
      </form>
    </div>
  );
}
