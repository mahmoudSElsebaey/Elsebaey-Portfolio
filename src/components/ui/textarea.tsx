import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "flex min-h-[80px] rounded-[7px] border border-white/10 focus:border-primary-1000 ",
        "font-light  bg-primary-1000/40 dark:bg-primary-1000/20 px-4 py-4 sm:py-5 text-xs sm:text-base outline outline-none ",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-1000 focus-visible:ring-offset-0  ",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
