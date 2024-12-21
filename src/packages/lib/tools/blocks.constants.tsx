import { generateGradientFromText } from "@/packages/shared/helpers/colors";
import LLMCompletion from "@/packages/ui/custom/Sandbox/LLMCompletion/LLMCompletion";
import WebSearchAPI from "@/packages/ui/custom/Sandbox/WebSearchAPI/WebSearchAPI";
import { AudioWaveform, Bot, Braces, Globe, TextCursorInput } from "lucide-react";
import SandboxInput from '../../ui/SandboxInput/SandboxInput';

export const BLOCKS = [
    {
        id: 1,
        name: "Human Input",
        description: "The starting point for the model. This block is required.",
        required: true,
        svg: <TextCursorInput />,
        gradient: generateGradientFromText("Human Input"),
        component: <SandboxInput/>,
        inputs: [],
        outputs: [],
        tools: []
    },
    {
        id: 2,
        name: "Audio Input",
        description: "An input block for audio data. This block is optional.",
        required: false,
        component: <div></div>,
        svg: <AudioWaveform />,
        gradient: generateGradientFromText("Audio Input"),
        inputs: [],
        outputs: [],
        tools: []
    },
    {
        id: 3,
        name: "LLM Chat Completion",
        description: "The API for calling an LLM model to generate text.",
        required: false,
        component: <LLMCompletion/>,
        svg: <Bot/>,
        gradient: generateGradientFromText("LLM Chat Completion"),
        inputs: [],
        outputs: [],
        tools: []
    },
    {
        id: 4,
        name: "Web Search API",
        description: "The API for calling a web search engine.",
        required: false,
        component: <WebSearchAPI />,
        svg: <Globe />,
        gradient: generateGradientFromText("Web Search API"),
        inputs: [],
        outputs: [],
        tools: []
    },
    {
        id: 5,
        name: "If Statement",
        description: "A conditional block that can be used to control the flow of the model.",
        required: false,
        component: <div></div>,
        svg: <Braces />,
        gradient: generateGradientFromText("Web Search API"),
        inputs: [],
        outputs: [],
        tools: []
    }
]