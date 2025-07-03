'use client';
import { useState, useEffect, useRef } from 'react';
import {
  SquareTerminal,
  Github,
  Sun,
  Moon,
  Search,
  ChevronRight,
  ChevronLeft,
  LineChart,
  BookText,
  ExternalLink,
} from 'lucide-react';
import ConnectionSwitcher from './ConnectionSwitcher';
import Link from 'next/link';
import { Box, HStack, Image, Text, IconButton } from '@chakra-ui/react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

const navItems = [
  { to: '/', label: 'Home', icon: SquareTerminal, isNewWindow: false },
  { to: '/metrics', label: 'Metrics', icon: LineChart, isNewWindow: false },
];

const bottomNavLinks = [
  {
    to: 'https://github.com/caioricciuti/duck-ui?utm_source=duck-ui&utm_medium=sidebar',
    label: 'GitHub',
    icon: Github,
    isNewWindow: true,
  },
  {
    to: 'https://duckui.com/docs?utm_source=duck-ui&utm_medium=sidebar',
    label: 'Documentation',
    icon: BookText,
    isNewWindow: true,
  },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      // Toogle sidebar when pressing Cmd/Ctrl + B
      if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsExpanded((isExpanded) => !isExpanded);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Box
      ref={sidebarRef}
      display='flex'
      flexDirection='column'
      bg='bg.subtle'
      borderRight='1px solid'
      borderRightColor='border'
      transition='all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      w={isExpanded ? '256px' : '64px'}
    >
      <HStack
        alignItems='center'
        justify='space-between'
        p='2'
        ml='2'
        mt='2'
        w='full'
      >
        {isExpanded && (
          <IconButton
            variant='plain'
            size='md'
            onClick={() => setIsExpanded(false)}
          >
            <ChevronLeft className='mr-2 h-4 w-4' />
          </IconButton>
        )}
      </HStack>

      <Separator className='w-full' />
      <div className='p-3'>
        <ConnectionSwitcher expanded={isExpanded} />
      </div>

      <ScrollArea className='flex-grow'>
        <nav className='space-y-1 p-2'>
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              target={item.isNewWindow ? '_blank' : '_self'}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#ffe814]/20`}
            >
              <item.icon className={`h-5 w-5 ${isExpanded ? 'mr-2' : ''}`} />
              {isExpanded && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>

      <div className='w-full'>
        <ScrollArea className='flex-grow'>
          <nav className='space-y-1 p-2'>
            {/*<QueryHistory isExpanded={isExpanded} />*/}
            {bottomNavLinks.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                target={item.isNewWindow ? '_blank' : '_self'}
                className={
                  'hover:bg-secondary/80 flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors'
                }
              >
                <item.icon className={`h-5 w-5 ${isExpanded ? 'mr-2' : ''}`} />
                {isExpanded && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <Separator className='mb-2 w-full' />
        <div
          className={`${isExpanded ? 'flex justify-around' : 'block p-2.5'}`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setOpen(true)}
                >
                  <Search className='h-5 w-5' />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span className='text-xs'>Search (Cmd/Ctrl + K)</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/*<Button variant="ghost" size="icon" onClick={toggleTheme}>*/}
          {/*  {theme === "dark" ? (*/}
          {/*    <Sun className="h-5 w-5" />*/}
          {/*  ) : (*/}
          {/*    <Moon className="h-5 w-5" />*/}
          {/*  )}*/}
          {/*</Button>*/}
        </div>
      </div>

      {!isExpanded && (
        <Button
          variant='ghost'
          size='icon'
          className='m-2'
          onClick={() => setIsExpanded(true)}
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Navigation'>
            {navItems.map((item) => (
              <CommandItem
                key={item.to}
                onSelect={() => {
                  if (item.isNewWindow) {
                    window.open(item.to, '_blank');
                    setOpen(false);
                    return;
                  }
                  // navigate(item.to);
                  setOpen(false);
                }}
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup>
            {bottomNavLinks.map((item) => (
              <CommandItem
                key={item.to}
                onSelect={() => {
                  if (item.isNewWindow) {
                    window.open(item.to, '_blank');
                    setOpen(false);
                    return;
                  }
                  // navigate(item.to);
                  setOpen(false);
                }}
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
                {item.isNewWindow && <ExternalLink className='p-1' />}
              </CommandItem>
            ))}
            <CommandSeparator />
          </CommandGroup>
          <CommandGroup heading='Actions'>
            <CommandItem
              onSelect={() => {
                // toggleTheme();
                // toast.info(
                //   `Theme changed to ${theme === "dark" ? "light" : "dark"}`
                // );
                toast.info(`Theme changed}`);
                setOpen(false);
              }}
            >
              <Sun className='mr-2 h-4 w-4' />
              {/*{theme === "dark" ? (*/}
              {/*  <Sun className="mr-2 h-4 w-4" />*/}
              {/*) : (*/}
              {/*  <Moon className="mr-2 h-4 w-4" />*/}
              {/*)}*/}
              {/*{theme === "dark" ? "Light Theme" : "Dark Theme"}*/}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Box>
  );
};

export default Sidebar;
