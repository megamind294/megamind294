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

- [x] Extend .github/workflows/snake.yml with daily skyline, two snake variants, and portfolio screenshot.
- [x] Add .github/scripts/capture-portfolio.cjs to check the HTTP response, wait for fonts, and save the screenshot.
- [x] Validate workflow structure and run the workflow after merge.

## Task 2: Display and verify

- [x] Add linked portfolio preview and theme-aware skyline/snake to readme.md.
- [x] Review the diff, merge the approved change, and confirm workflow success.
- [x] Confirm output paths exist, validate the four SVGs, and visually inspect the portfolio screenshot.

No persistent test suite is added for this small profile/configuration change. Verify the actual generated assets.

## Verification record

- Independent review: no material findings.
- First run exposed a root-owned output directory created by the snake container. Fixed by creating dist with runner ownership before the container starts.
- Successful full workflow: https://github.com/megamind294/megamind294/actions/runs/40031837628
- All five assets published; portfolio screenshot is 1440x1000 and visually verified. Four SVGs parse successfully.
- The embedded browser was unavailable during verification; the actual generated screenshot was inspected directly instead.
- No new secrets or paid services used. The user approved implementation and publishing in this session.
