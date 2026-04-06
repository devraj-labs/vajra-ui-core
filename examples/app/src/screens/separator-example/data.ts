import { colors } from '../../colors';

export type Contact = {
  id: string;
  name: string;
  role: string;
  online: boolean;
};

export const getInitials = (name: string) =>
  name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase();

const AVATAR_COLORS = [
  colors.primary,
  colors.success,
  colors.warning,
  colors.error,
];

export const getAvatarColor = (name: string) =>
  AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

export const CONTACTS: Contact[] = [
  { id: '1', name: 'Rishav', role: 'Developer', online: true },
  { id: '2', name: 'Om', role: 'Engineer', online: true },
  { id: '3', name: 'Nikhil', role: 'Law', online: true },
  { id: '4', name: 'Aviral', role: 'Engineer', online: false },
  { id: '5', name: 'Ayush', role: 'Engineer', online: false },
  { id: '6', name: 'Aishika', role: 'Engineer', online: false },
  { id: '8', name: 'Romit', role: 'DevOps', online: false },
  { id: '9', name: 'Abhishek', role: 'DevOps', online: false },
  { id: '10', name: 'Himanshu', role: 'TL', online: false },
  { id: '11', name: 'Ankit', role: 'Engineer', online: false },
  { id: '12', name: 'Rishi', role: 'Engineer', online: false },
];

export const grouped = CONTACTS.reduce<Record<string, Contact[]>>((acc, c) => {
  const letter = c.name[0];
  acc[letter] = [...(acc[letter] ?? []), c];
  return acc;
}, {});
