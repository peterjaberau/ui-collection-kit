'use client'
import * as React from "react";
import { ChevronsUpDown, ServerCog, Loader2, Cable } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
// import { useDuckStore } from "@/store";

const mockData = {
  connectionList: [
    {
      id: 1,
      name: "Local",
      scope: "(local)",
    }
  ],
  currentConnection: {
    id: 1,
    name: "Local",
    scope: "(local)",
  }
}

interface ConnectionSwitcherProps {
  expanded: boolean;
  className?: string;
}


const renderConnectionIcon = () => (
  <div
    className="flex aspect-square size-6 items-center justify-center rounded-lg
                  bg-sidebar-primary text-sidebar-primary-foreground
                  transition-transform duration-200 group-hover:scale-105"
  >
    <ServerCog className="size-4" />
  </div>
);


const SidebarButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading?: boolean }
>(({ children, className, isLoading, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "flex items-center justify-between w-full gap-3 p-3",
      "bg-sidebar-primary text-sidebar-primary-foreground",
      "hover:bg-sidebar-primary/90 hover:text-sidebar-accent-foreground",
      "transition-colors duration-200",
      "focus:ring-2 focus:ring-purple-500/20",
      isLoading && "opacity-70 cursor-not-allowed",
      className
    )}
    disabled={isLoading}
    {...props}
  >
    {children}
  </Button>
));

SidebarButton.displayName = "SidebarButton";

export default function ConnectionSwitcher({
  expanded,
  className,
}: ConnectionSwitcherProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { connectionList, currentConnection } = mockData;
  const activeConnection = currentConnection;





  return (
    <div className={cn("w-full", className)}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          {expanded ? (
            <SidebarButton
              className="group data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {renderConnectionIcon()}
              <div className="text-left text-sm leading-tight ml-3 flex items-center justify-between w-full">
                <span className="truncate font-semibold">
                  {activeConnection?.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {activeConnection?.scope}
                </span>
              </div>
              <ChevronsUpDown
                className="ml-auto size-4 opacity-60 transition-transform duration-200
                                     group-hover:opacity-100 group-data-[state=open]:rotate-180"
              />
            </SidebarButton>
          ) : (
            <Button
              size="icon"
              className="group data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground
                       bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90
                       transition-all duration-200"
              disabled={false}
            >
              {renderConnectionIcon()}
            </Button>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border-purple-500/20"
          align="start"
          sideOffset={4}
        >
          <DropdownMenuLabel className="flex items-center text-xs text-muted-foreground mb-2">
            Connections
            <Badge
              variant="outline"
              className="ml-2 bg-purple-100/10 text-purple-500 border-purple-500"
            >
              Alpha
            </Badge>
          </DropdownMenuLabel>

          {connectionList.map((connection) => (
            <DropdownMenuItem
              key={connection.id}
              // onClick={() => handleConnectionChange(connection.id)}
              className={cn(
                "gap-2 p-2 cursor-pointer mb-1 transition-colors duration-150",
                "hover:bg-purple-500/10",
                activeConnection?.id === connection.id && "bg-purple-500/30"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{connection.name}</span>
                <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-purple-500/20">
                  {connection.scope}
                </span>
              </div>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator className="bg-purple-500/20" />

          <DropdownMenuItem
            className="gap-2 p-2 cursor-pointer hover:bg-purple-500/10 transition-colors duration-150"
            onClick={() => {
              // navigate("/connections");
              setIsOpen(false);
            }}
          >
            <div className="flex items-center gap-2">
              <Cable className="size-4 text-purple-500" />
              <span className="font-semibold text-sm">Manage Connections</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
