import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';


interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function formatCount(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toString();
}

function buildResponse(message: string, data: any) {
  const { metrics, followerGrowthData, engagementData, platformData, topPosts } = data;
  const lower = message.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hi there! 👋 I'm your InsightSocial assistant. Ask me about the dashboard or type 'connect' to enable live updates.";
  }

  if (lower.includes('connect')) {
    return 'Type \"connect\" to open a live WebSocket connection, or provide a ws:// URL.';
  }

  if (lower.includes('follower') || lower.includes('follow')) {
    const latest = followerGrowthData[followerGrowthData.length - 1];
    const followMetric = metrics.find((m: any) => m.title === 'Total Followers');
    const insta = platformData.find((p: any) => p.name === 'Instagram')?.value;
    return `Total followers: ${formatCount(latest.followers)} (${followMetric?.change ?? ''}). Instagram: ${insta}% of audience.`;
  }

  if (lower.includes('engagement') || lower.includes('engage')) {
    const rateMetric = metrics.find((m: any) => m.title === 'Engagement Rate');
    const topDay = engagementData.reduce((prev: any, curr: any) => (curr.likes > prev.likes ? curr : prev));
    return `Engagement rate: ${rateMetric?.value ?? 'N/A'}. Highest likes on ${topDay.day} (${formatCount(topDay.likes)} likes).`;
  }

  if (lower.includes('platform') || lower.includes('instagram') || lower.includes('twitter')) {
    return platformData.map((p: any) => `${p.name}: ${p.value}%`).join(', ');
  }

  if (lower.includes('post') || lower.includes('top post')) {
    const top = topPosts.reduce((prev: any, curr: any) => (curr.engagement > prev.engagement ? curr : prev));
    return `Top post is on ${top.platform}: ${formatCount(top.likes)} likes, ${top.engagement}% engagement.`;
  }

  if (lower.includes('reach')) {
    const reachMetric = metrics.find((m: any) => m.title === 'Total Reach');
    return `Total reach: ${reachMetric?.value ?? 'N/A'} (${reachMetric?.change ?? ''}).`;
  }

  if (lower.includes('growth') || lower.includes('trend')) {
    const first = followerGrowthData[0].followers;
    const last = followerGrowthData[followerGrowthData.length - 1].followers;
    const pct = (((last - first) / first) * 100).toFixed(1);
    return `Follower growth: from ${formatCount(first)} to ${formatCount(last)} (~${pct}% over period).`;
  }

  return `I can answer about followers, engagement, platforms, posts, reach, and growth. Try: "How many followers?"`;
}

export default function ChatBot() {
  const dashboard = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm your InsightSocial AI assistant. Ask me anything about your social media analytics!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [wsUrl, setWsUrl] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // reflect last-updated time in the system message whenever dashboard data changes
    setMessages(prev => {
      const copy = [...prev];
      const last = (dashboard as any).lastUpdated as Date | undefined;
      const lastStr = last ? `Last update: ${new Date(last).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : '';
      copy[0] = { ...copy[0], text: `Hello! 👋 I'm your InsightSocial AI assistant. ${lastStr} Ask me anything about your social media analytics!` };
      return copy;
    });
  }, [dashboard.metrics, dashboard.lastUpdated]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay and generate dynamic reply from live dashboard
    setTimeout(() => {
      const botText = buildResponse(inputValue, dashboard);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  function quickAsk(q: string) {
    setInputValue('');
    const userMessage: Message = { id: messages.length + 1, text: q, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    setTimeout(() => {
      const botText = buildResponse(q, dashboard);
      setMessages(prev => [...prev, { id: prev.length + 1, text: botText, sender: 'bot', timestamp: new Date() }]);
      setIsTyping(false);
    }, 500);
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return(
    <>
   {!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="
      try fixed overflow-visible bottom-5 right-5 z-50
    "
  >
    <Bot className="w-5 h-5" />
    <span className="text-sm font-medium">InsightSocial AI</span>
  </button>
)}


      {/* Chat Window */}
        {isOpen && (
  <div className="
  trybutdontcry
    fixed
    top-0
    right-0
    h-screen
    w-[380px]
    bg-white
    shadow-2xl
    z-[9999]
    flex-col
    border-l border-gray-200
  ">
          {/* Header */}
          <div className="bg-gradient-to-br from-orange-500 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">InsightSocial AI</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="mb-3 flex-col gap-2 items-center justify-between">
                <div className="flex gap-2">
                <button onClick={() => quickAsk('How many followers?')} className="options text-xs px-2 py-1 bg-gray-100 rounded">Followers</button>
                <button onClick={() => quickAsk('Which day has highest likes?')} className="options text-xs px-2 py-1 bg-gray-100 rounded">Top Day</button>
                <button onClick={() => quickAsk("What's the top post?")} className="options text-xs px-2 py-1 bg-gray-100 rounded">Top Post</button>
              </div>
              <div className="text-xs text-gray-500">{(dashboard as any).lastUpdated ? `Last update: ${new Date((dashboard as any).lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'No recent updates'}</div>
              
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`messagebot max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-orange-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {/* {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2 flex-col">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-br from-orange-500 to-blue-600 text-white rounded-full hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
