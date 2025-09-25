'use client';

import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Bot,
  BookOpen,
  FileCode2,
  LayoutDashboard,
  Library,
  BookText,
} from 'lucide-react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/recommendations', label: 'AI Recommendations', icon: Bot },
  { href: '/snippets', label: 'AI Snippets', icon: FileCode2 },
  { href: '/guides', label: 'Dev Guides', icon: BookOpen },
  { href: '/components-library', label: 'Component Library', icon: Library },
  { href: '/api-docs', label: 'API Docs', icon: BookText },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            tooltip={link.label}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
