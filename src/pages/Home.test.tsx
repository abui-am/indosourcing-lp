import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./Home";

describe("Indosourcing landing page", () => {
  it("renders hero headline and CTAs", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /Sourcing B2B Lebih Cepat dengan Indosourcing/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Saya Buyer/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Saya Supplier/i })).toBeInTheDocument();
  });

  it("renders core sections", () => {
    render(<Home />);

    expect(
      screen.getAllByRole("heading", {
        name: /Dari proses manual yang lambat ke workflow yang terstruktur/i,
      })[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", {
        name: /Semua kebutuhan sourcing, end-to-end di satu platform/i,
      })[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", {
        name: /3 langkah sederhana untuk sourcing yang lebih efisien/i,
      })[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", {
        name: /Proses lebih aman, lebih tertib, dan mudah diawasi/i,
      })[0],
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", {
        name: /Pertanyaan yang sering ditanyakan/i,
      })[0],
    ).toBeInTheDocument();
  });
});
