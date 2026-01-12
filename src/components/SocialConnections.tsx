import { useState } from 'react';
import { ConnectionCard } from './ConnectionCard';
import { Instagram, Linkedin, Facebook, Twitter, Github } from 'lucide-react';

interface SocialAccount {
  id: string;
  name: string;
  icon: any;
  color: string;
  bgColor: string;
  connected: boolean;
  username?: string;
}

export function SocialConnections() {
  const [accounts, setAccounts] = useState<SocialAccount[]>([
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      connected: false,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      connected: false,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      connected: false,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      color: 'text-sky-500',
      bgColor: 'bg-sky-50',
      connected: false,
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      color: 'text-slate-800',
      bgColor: 'bg-slate-100',
      connected: false,
    },
  ]);

  const handleConnect = (id: string) => {
    setAccounts(accounts.map(account => 
      account.id === id 
        ? { ...account, connected: !account.connected, username: !account.connected ? `@user_${id}` : undefined }
        : account
    ));
  };

  const connectedCount = accounts.filter(a => a.connected).length;

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600 mb-1">Connected Accounts</p>
            <p className="text-3xl font-semibold text-slate-900">
              {connectedCount} <span className="text-lg text-slate-500">/ {accounts.length}</span>
            </p>
          </div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{Math.round((connectedCount / accounts.length) * 100)}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.map((account) => (
          <ConnectionCard
            key={account.id}
            account={account}
            onConnect={handleConnect}
          />
        ))}
      </div>
    </div>
  );
}
