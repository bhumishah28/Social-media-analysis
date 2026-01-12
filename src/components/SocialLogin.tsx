import { Instagram, Linkedin, Facebook, Twitter, Github, BarChart3, TrendingUp, Users } from 'lucide-react';
import logo from '../assets/logo.png';

export function SocialLogin() {
  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      bgColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
      hoverColor: 'hover:from-purple-700 hover:to-pink-700',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      bgColor: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#004182]',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      bgColor: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#0C63D4]',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      bgColor: 'bg-[#1DA1F2]',
      hoverColor: 'hover:bg-[#0C85D0]',
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: Github,
      bgColor: 'bg-[#24292e]',
      hoverColor: 'hover:bg-[#1a1e22]',
    },
  ];

  const handleLogin = (platform: string) => {
    console.log(`Logging in with ${platform}`);
    // Simulate OAuth flow
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-6">
            <img src={logo} alt="InsightSocial Logo" className="h-24 w-auto mb-2" />
          </div>

          <h1 className="mb-6 text-slate-900">
            Analyze Your Social Media Performance
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            Connect your social accounts and get powerful insights about your audience, engagement, and growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Track Growth</p>
                <p className="text-sm text-slate-600">Real-time analytics</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Know Your Audience</p>
                <p className="text-sm text-slate-600">Deep insights</p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Compare Metrics</p>
                <p className="text-sm text-slate-600">Cross-platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
              <p className="text-slate-600">Sign in to access your dashboard</p>
            </div>

            <div className="space-y-3">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.id}
                    onClick={() => handleLogin(platform.id)}
                    className={`w-full ${platform.bgColor} ${platform.hoverColor} text-white py-3.5 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md`}
                  >
                    <Icon className="w-5 h-5" />
                    Continue with {platform.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                By continuing, you agree to our Terms of Service and Privacy Policy.
                We'll never post without your permission.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-600 mt-6">
            Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Sign up free</a>
          </p>
        </div>
      </div>
    </div>
  );
}