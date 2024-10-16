import { render, screen } from "@testing-library/react";
import IndexHero from "./page";
import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";

describe("IndexHero Component", () => {
  beforeEach(() => {
    render(<IndexHero />);
  });

  it("renders profile section correctly", () => {
    const profileImage = screen.getByAltText("Claes Nymand Nilsson profile");
    expect(profileImage).toHaveAttribute("src", "/profile-pic-200.webp");
    expect(profileImage).toHaveAttribute("width", "40");
    expect(profileImage).toHaveAttribute("height", "40");

    const profileName = screen.getByText("Claes Nymand Nilsson");
    expect(profileName).toBeInTheDocument();

    const profileDescription = screen.getByText(
      "Biotech Scientist and Full-Stack Developer"
    );
    expect(profileDescription).toBeInTheDocument();
  });
});
