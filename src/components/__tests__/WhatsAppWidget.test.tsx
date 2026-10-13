import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WhatsAppWidget from "../WhatsAppWidget";

describe("WhatsApp support widget", () => {
  it("links to the Ascend WhatsApp number with an open-ended message", () => {
    render(<WhatsAppWidget />);

    const link = screen.getByRole("link", { name: /whatsapp/i });

    expect(link).toHaveAttribute(
      "href",
      "https://wa.me/918847747693?text=Hello%20Ashima%2C%20I%20have%20a%20question.",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
  });
});
