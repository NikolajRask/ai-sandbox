import { createSafeContext } from "@/packages/lib/tools/context";

interface SandboxContextProps {
    addLine: (from: number, to: number, type?: "tool" | "data" | "control" | "other") => void;
    addItem: (content: React.ReactNode, title: string, x?: number, y?: number) => void;
}

const [SandboxProvider, useSandboxContext] = createSafeContext<SandboxContextProps | undefined>();

export { SandboxProvider, useSandboxContext };