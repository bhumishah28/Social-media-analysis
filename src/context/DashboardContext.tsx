import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
export type DashboardState = {
  metrics: any[];
  followerGrowthData: any[];
  engagementData: any[];
  platformData: any[];
  topPosts: any[];
  lastUpdated?: Date;
};

import * as initialData from '../data/dashboardData';

type AnyObj = any;

const DashboardContext = createContext<AnyObj | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [metrics, setMetrics] = useState(initialData.metrics);
  const [followerGrowthData, setFollowerGrowthData] = useState(initialData.followerGrowthData);
  const [engagementData, setEngagementData] = useState(initialData.engagementData);
  const [platformData, setPlatformData] = useState(initialData.platformData);
  const [topPosts, setTopPosts] = useState(initialData.topPosts);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // WebSocket support: allow external servers to push JSON partial updates
  const wsRef = useRef<WebSocket | null>(null);

  function connectWebSocket(url: string) {
    if (wsRef.current) wsRef.current.close();
    try {
      const ws = new WebSocket(url);
      ws.onopen = () => console.log('[Dashboard] WebSocket connected', url);
      ws.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data);
          if (payload.metrics) setMetrics(payload.metrics);
          if (payload.followerGrowthData) setFollowerGrowthData(payload.followerGrowthData);
          if (payload.engagementData) setEngagementData(payload.engagementData);
          if (payload.platformData) setPlatformData(payload.platformData);
          if (payload.topPosts) setTopPosts(payload.topPosts);
          setLastUpdated(new Date());
        } catch (err) {
          console.warn('[Dashboard] Failed to parse message', err);
        }
      };
      ws.onclose = () => console.log('[Dashboard] WebSocket closed');
      ws.onerror = (err) => console.warn('[Dashboard] WebSocket error', err);
      wsRef.current = ws;
    } catch (err) {
      console.warn('[Dashboard] WebSocket connect failed', err);
      throw err;
    }
  }

  function disconnectWebSocket() {
    wsRef.current?.close();
    wsRef.current = null;
    console.log('[Dashboard] WebSocket disconnected');
  }

  return (
    <DashboardContext.Provider
      value={{
        metrics,
        followerGrowthData,
        engagementData,
        platformData,
        topPosts,
        lastUpdated,
        connectWebSocket,
        disconnectWebSocket,
        // setters exposed for advanced usage
        _setMetrics: setMetrics,
        _setFollowerGrowthData: setFollowerGrowthData,
        _setEngagementData: setEngagementData,
        _setPlatformData: setPlatformData,
        _setTopPosts: setTopPosts,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error('useDashboard must be used inside DashboardProvider');
  return ctx;
}
