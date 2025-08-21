import { FadeIn } from "@/components/motion/fade-in";
import { TerminalText } from "@/components/typewriter-text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

type Item = {
  title: string;
  subtitle?: string;
  period: string;
  bullets?: string[];
  tags?: string[];
};

export function Timeline({ 
  items,
  startDelay = 900,
  stepDelay = 250,
  speed = 25,
  showProgressBar = false,
  progressPercent = 0,
}: { items: Item[]; startDelay?: number; stepDelay?: number; speed?: number; showProgressBar?: boolean; progressPercent?: number }) {
  const pct = Math.max(0, Math.min(100, progressPercent));

  return (
    <div className="space-y-4">
      {showProgressBar && (
        <div className="w-full h-2 rounded bg-emerald-200/40 dark:bg-green-900/30 overflow-hidden border border-emerald-500/30 dark:border-green-400/30">
          <div
            className="h-full bg-emerald-500/70 dark:bg-green-400/70 transition-[width] duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
      <ol className="relative ml-3 border-l border-emerald-500/60 dark:border-green-400/60 pl-6">
        {items.map((item, index) => {
          const base = startDelay + index * stepDelay;
          const story = item.bullets?.join("\n• ") ?? "";
          return (
            <li key={index} className="mb-8">
              <span className="absolute -left-[9px] mt-1 size-4 rounded-full border-2 border-emerald-500 dark:border-green-400 bg-emerald-50 dark:bg-black" />
              <FadeIn delay={index * 0.15}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="space-y-2 rounded-lg border border-emerald-500/40 dark:border-green-400/30 bg-emerald-50/30 dark:bg-black/40 p-4">
                      <div className="text-base font-semibold text-emerald-700 dark:text-green-400">
                        <TerminalText
                          text={item.title}
                          delay={base}
                          speed={speed}
                          type="terminal"
                          showCursor={false}
                        />
                        {item.subtitle ? (
                          <TerminalText
                            text={` — ${item.subtitle}`}
                            delay={base + 200}
                            speed={speed}
                            type="terminal"
                            showCursor={false}
                            className="inline text-emerald-600/80 dark:text-green-400/80"
                          />
                        ) : null}
                      </div>
                      <TerminalText
                        text={item.period}
                        delay={base + 350}
                        speed={speed}
                        type="terminal"
                        showCursor={false}
                        className="text-sm text-emerald-600/70 dark:text-green-400/70"
                      />
                      {item.tags && item.tags.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="border-emerald-500/30 dark:border-green-400/30 bg-emerald-100/40 dark:bg-green-400/10 text-emerald-700 dark:text-green-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </TooltipTrigger>
                  {story ? (
                    <TooltipContent sideOffset={8} className="bg-emerald-600 text-white dark:bg-green-500 max-w-sm whitespace-pre-wrap">
                      • {story}
                    </TooltipContent>
                  ) : null}
                </Tooltip>
              </FadeIn>
            </li>
          );
        })}
      </ol>
    </div>
  );
}


