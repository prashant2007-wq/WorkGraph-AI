import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import "reactflow/dist/style.css";

const nodes: Node[] = [
  { id: "1", position: { x: 0, y: 120 }, data: { label: "Billing Platform" }, type: "input" },
  { id: "2", position: { x: 250, y: 120 }, data: { label: "Fix checkout bug" } },
  { id: "3", position: { x: 520, y: 40 }, data: { label: "PR #48" } },
  { id: "4", position: { x: 520, y: 200 }, data: { label: "Backend API Blocker" } },
  { id: "5", position: { x: 800, y: 120 }, data: { label: "Release Risk" }, type: "output" }
];

const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", label: "has task" },
  { id: "e2-3", source: "2", target: "3", label: "linked PR" },
  { id: "e2-4", source: "2", target: "4", label: "blocked by" },
  { id: "e3-5", source: "3", target: "5", label: "waiting review" },
  { id: "e4-5", source: "4", target: "5", label: "creates risk" }
];

export default function WorkGraph() {
  return (
    <section className="h-[calc(100vh-4rem)]">
      <div>
        <p className="text-blue-400 font-medium">Work Graph</p>
        <h1 className="text-4xl font-bold mt-2">How work is connected</h1>
        <p className="text-slate-400 mt-3">
          Visualize relationships between projects, tasks, PRs, blockers, reviewers, and risks.
        </p>
      </div>

      <div className="mt-8 h-[620px] rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
}
