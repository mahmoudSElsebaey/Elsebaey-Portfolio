"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("rounded-md p-1", className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `tabs-trigger whitespace-nowrap rounded-lg p-3 text-base md:text-xl font-bold cursor-pointer
        ring-offset-white transition-all capitalize

        border-b-4 border-transparent
        hover:border-b-2
        hover:border-primary-1000/20
        hover:rounded-full

        data-[state=active]:text-primary-1000
        data-[state=active]:font-extrabold
        data-[state=active]:border-b-4
        data-[state=active]:border-b-primary-1000
        data-[state=active]:text-shadow-[1px 1px 5px #fff]
        data-[state=active]:rounded-full`,
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none min-h-[480px]", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
