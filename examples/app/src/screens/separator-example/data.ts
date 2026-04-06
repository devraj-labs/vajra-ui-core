import { colors } from '../../colors';

export type Contact = {
  id: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  online: boolean;
};

export const CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'Alice Kim',
    role: 'Designer',
    initials: 'AK',
    color: colors.primary,
    online: true,
  },
  {
    id: '2',
    name: 'Alex Morgan',
    role: 'Engineer',
    initials: 'AM',
    color: colors.success,
    online: false,
  },
  {
    id: '3',
    name: 'Ben Nakamura',
    role: 'PM',
    initials: 'BN',
    color: colors.warning,
    online: true,
  },
  {
    id: '4',
    name: 'Clara Osei',
    role: 'Designer',
    initials: 'CO',
    color: colors.error,
    online: true,
  },
  {
    id: '5',
    name: 'Dan Park',
    role: 'Engineer',
    initials: 'DP',
    color: colors.primary,
    online: false,
  },
  {
    id: '6',
    name: 'Eva Reyes',
    role: 'QA',
    initials: 'ER',
    color: colors.success,
    online: false,
  },
  {
    id: '7',
    name: 'Frank Singh',
    role: 'DevOps',
    initials: 'FS',
    color: colors.warning,
    online: true,
  },
];

export const grouped = CONTACTS.reduce<Record<string, Contact[]>>((acc, c) => {
  const letter = c.name[0];
  acc[letter] = [...(acc[letter] ?? []), c];
  return acc;
}, {});
