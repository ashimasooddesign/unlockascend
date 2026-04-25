import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteHeader from "../SiteHeader";

const setReducedMotion = (reduce: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: reduce && query.includes("prefers-reduced-motion"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
};

describe("SiteHeader logo/wordmark swap", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("omits fade transition classes when prefers-reduced-motion is enabled", () => {
    setReducedMotion(true);
    render(<SiteHeader />);

    const images = screen
      .getAllByRole("link", { name: /ascend home/i })[0]
      .querySelectorAll("img");

    expect(images.length).toBe(2);
    images.forEach((img) => {
      const cls = img.className;
      expect(cls).not.toMatch(/transition-opacity/);
      expect(cls).not.toMatch(/duration-/);
    });
  });

  it("applies fade transition classes when reduced motion is not requested", () => {
    setReducedMotion(false);
    render(<SiteHeader />);

    const images = screen
      .getAllByRole("link", { name: /ascend home/i })[0]
      .querySelectorAll("img");

    expect(images.length).toBe(2);
    images.forEach((img) => {
      expect(img.className).toMatch(/transition-opacity/);
      expect(img.className).toMatch(/duration-500/);
    });
  });
});
