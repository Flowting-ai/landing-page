import { MessageBubble } from "@/components/MessageBubble";
import { ChatInput } from "@/components/ChatInput";

/** Real product surface: MessageBubble conversation + the real ChatInput
 *  (with its built-in model selector + add menu). Not a marketing mock. */
export default function ChatspacePanel() {
  return (
    <div className="flex flex-col gap-4 p-5 sm:p-6 min-h-[360px]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <MessageBubble role="user" content="Summarize the Q2 board deck and draft three takeaways." />
        </div>
        <div className="flex justify-start">
          <MessageBubble
            role="assistant"
            content={`Revenue grew +34% QoQ, led by team plans. The three that matter:

1. Expansion is 41% of new ARR — up from 28%
2. Slack install → paid conversion hit 22%
3. Two enterprise pilots set to close in Q3`}
          />
        </div>
      </div>

      <div className="mt-auto">
        <ChatInput
          placeholder="Message Souvenir…"
          textareaLabel="Message Souvenir"
          modelName="Claude Opus 4.8"
        />
      </div>
    </div>
  );
}
