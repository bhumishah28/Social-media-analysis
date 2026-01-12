// import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import React from "react";
import "./connect.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const AuthLanding: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="connect-auth-page">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SECTION */}
        <div className="connect-auth-left">
          {/* Logo */}
          <div className="connect-brand">
            <h1>
              INSIGHT
            </h1>
            <span>
              Social
            </span>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700 uppercase">
              Analyze Your Social Media Performance
            </p>
            <p className="connectp text-gray-600 ">
              Connect your social accounts and get powerful insights about
              your audience, engagement, and growth.
            </p>
          </div>

          {/* Features */}
          <div className="connect-features">
            <Feature
              title="Track Growth"
              desc="Real-time analytics"
              icon="📈"
            />
            <Feature
              title="Know Your Audience"
              desc="Deep insights"
              icon="👥"
            />
            <Feature
              title="Compare Metrics"
              desc="Cross-platform"
              icon="📊"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="connect-auth-right">
          <div className="connect-auth-card">
            <h3>
              Welcome Back
            </h3>
            <p className="connect-subtitle">
              Sign in to access your dashboard
            </p>

            <div>
            <SocialButton
              label="Continue with Instagram"
              icon={<FaInstagram />}
              className="bg-gradient-to-r from-purple-500 to-pink-400"
              onClick={() => navigate("/connect2")}
            />
            <SocialButton
              label="Continue with LinkedIn"
              icon={<FaLinkedinIn />}
              className="bg-blue-700"
              style={{backgroundColor: '#0077B5'}}
              onClick={() => navigate("/connect2")}
            />
            <SocialButton
              label="Continue with Facebook"
              icon={<FaFacebookF />}
              className="bg-[#1877F2]"
              onClick={() => navigate("/connect2")}
            />
            <SocialButton
              label="Continue with Twitter"
              icon={<FaTwitter />}
              className="bg-[#1DA1F2]"
              onClick={() => navigate("/connect2")}
            />
            <SocialButton
              label="Continue with GitHub"
              icon={<FaGithub />}
              className="bg-[#24292e]"
              onClick={() => navigate("/connect2")}
            />
            </div>

            <p className="connect-terms">
              By continuing, you agree to our{" "}
              <span className="underline cursor-pointer">Terms of Service</span>{" "}
              and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
              <br />
              We'll never post without your permission.
            </p>

            <p className="connect-signup-text">
              Don&apos;t have an account?{" "}
              <span className="cursor-pointer">
                Sign up free
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;

/* ------------------ Helper Components ------------------ */

interface FeatureProps {
  title: string;
  desc: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, desc, icon }) => (
  <div className="connect-feature">
    <div className="connect-feature-icon">
      {icon}
    </div>
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
);

interface SocialButtonProps {
  label: string;
  icon: React.ReactNode;
  className: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  label,
  icon,
  className,
  onClick,
  style,
}) => (
  <button
    onClick={onClick}
    className={`connect-social-btn ${className}`}
    style={style}
  >
    <span>{icon}</span>
    {label}
  </button>
);
