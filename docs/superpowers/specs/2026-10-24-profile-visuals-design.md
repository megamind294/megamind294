# Profile visuals design

Approved by the user on 2026-10-24.

Add a large screenshot of https://rinklesharma.pl/ that links to the live portfolio. Add a daily 3D contribution skyline and light/dark variants of both the skyline and existing snake. Keep the existing profile sections.

## Approaches

Chosen: a clickable still preview plus generated SVGs, compatible with GitHub profile rendering. An animated website preview was considered; the user approved the recommended still preview. Iframes and interactive JavaScript cannot run in a profile README.

## Implementation choices

Extend the existing workflow and publish assets to its output branch. Capture the portfolio with Chromium at 1440x1000. Use the existing GITHUB_TOKEN, without new credentials. Use public contribution information. Schedule one daily refresh and allow manual execution. Select images using picture elements with prefers-color-scheme.
