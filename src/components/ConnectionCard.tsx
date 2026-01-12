import { Check } from 'lucide-react';

interface ConnectionCardProps {
  account: {
    id: string;
    name: string;
    icon: any;
    color: string;
    bgColor: string;
    connected: boolean;
    username?: string;
  };
  onConnect: (id: string) => void;
}

export function ConnectionCard({ account, onConnect }: ConnectionCardProps) {
  const Icon = account.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${account.bgColor} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${account.color}`} />
        </div>
        {account.connected && (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-1">{account.name}</h3>
      
      {account.connected ? (
        <p className="text-sm text-slate-600 mb-4">{account.username}</p>
      ) : (
        <p className="text-sm text-slate-500 mb-4">Not connected</p>
      )}

      <button
        onClick={() => onConnect(account.id)}
        className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors ${
          account.connected
            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
        }`}
      >
        {account.connected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
}
