import { generateGradientFromText } from "@/packages/shared/helpers/colors";
import { Bot, TextCursorInput } from "lucide-react";

export const BLOCKS = [
    {
        id: 1,
        name: "Human Input",
        description: "The starting point for the model. This block is required.",
        required: true,
        svg: <TextCursorInput />,
        gradient: generateGradientFromText("Human Input"),
        component: <div></div>,
        inputs: [],
        outputs: [],
        tools: []
    },
    {
        id: 2,
        name: "LLM Chat Completion",
        description: "The API for calling an LLM model to generate text.",
        required: false,
        component: <div></div>,
        svg: <Bot/>,
        gradient: generateGradientFromText("LLM Chat Completion"),
        inputs: [],
        outputs: [],
        tools: []
    }
]