import {
  Utensils,
  Leaf,
  Users,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import type { Feature, socialLinks } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  utensils: Utensils,
  leaf: Leaf,
  users: Users,
  'map-pin': MapPin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

export function FeatureIcon({ name, className }: { name: Feature['icon']; className?: string }) {
  const Icon = iconMap[name] ?? Utensils;
  return <Icon className={className} />;
}

export function SocialIcon({
  name,
  className,
}: {
  name: (typeof socialLinks)[number]['icon'];
  className?: string;
}) {
  const Icon = iconMap[name] ?? Facebook;
  return <Icon className={className} />;
}
