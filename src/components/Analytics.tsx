import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

const GA_ID = "G-0EPZ0G1KPM";
const CONSENT_KEY = "ps-cookies-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function initGtag() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga4-loader")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Consent Mode v2 — defaults
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500,
  });

  const s = document.createElement("script");
  s.id = "ga4-loader";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true, send_page_view: false });

  // Apply saved consent if present
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === "accepted") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  } catch {
    // ignore
  }
}

export function Analytics() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    initGtag();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path:
        pathname +
        (search ? `?${new URLSearchParams(search as Record<string, string>).toString()}` : "") +
        (hash || ""),
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search, hash]);

  return null;
}

export function grantAnalyticsConsent() {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", { analytics_storage: "granted" });
}

export function denyAnalyticsConsent() {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", { analytics_storage: "denied" });
}
