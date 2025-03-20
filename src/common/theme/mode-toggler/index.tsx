"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/common/components/ui";
import { useHasMounted } from "@/common/lib/hooks";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!hasMounted) return null;

  return (
    <Button
      className="relative flex h-6 w-11 items-center justify-between rounded-full bg-gray-200 px-1 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      size={"sm"}
      onClick={toggleTheme}
    >
      <motion.div
        className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md"
        animate={{
          x: theme === "dark" ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "light" ? (
          <Sun className="h-3 w-3 text-yellow-500" />
        ) : (
          <Moon className="h-3 w-3 text-gray-700" />
        )}
      </motion.div>
    </Button>
  );
}
