# Profile Visuals Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this approved change in the current session.

**Goal:** Display a portfolio preview and theme-aware contribution visuals on the GitHub profile.

**Architecture:** Keep the profile README and existing output branch. One daily workflow generates the assets and publishes only its dist directory.

**Tech Stack:** GitHub Actions, Playwright Chromium, Platane/snk, github-profile-3d-contrib, HTML picture elements.

**Spec:** ../specs/2026-10-24-profile-visuals-design.md

## Global Constraints

- Link the preview to https://rinklesharma.pl/.
- Daily updates, no new secrets, light/dark skyline and snake.
- Preserve unrelated profile content.

## Review Focus

- GitHub strips iframe/script: use linked images and picture elements.
- Theme changes: provide explicit dark sources and light img fallbacks.
- Website errors: check HTTP response before capturing.
- Missing assets: verify workflow success and all five published files.
- Output overwrite: generate every referenced asset before publishing dist.

## Task 1: Generate visuals

- [ ] Extend .github/workflows/snake.yml with daily skyline, two snake variants, and portfolio screenshot.
- [ ] Add .github/scripts/capture-portfolio.cjs to check the HTTP response, wait for fonts, and save the screenshot.
- [ ] Validate workflow structure and run the workflow after merge.

## Task 2: Display and verify

- [ ] Add linked portfolio preview and theme-aware skyline/snake to readme.md.
- [ ] Review the diff, merge the approved change, and confirm workflow success.
- [ ] Confirm output paths exist and visually inspect the profile.

No persistent test suite is added for this small profile/configuration change. Verify the actual generated assets.
