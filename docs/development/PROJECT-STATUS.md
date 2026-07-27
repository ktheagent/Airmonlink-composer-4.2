# Composer 3 Project Status

GITHUB_EMBARGO_STATUS: ACTIVE

Project state: VERSION 1.1.10 BUILD 30 LOCAL VIEWPORT-STABILIZATION CHECKPOINT - NOT FINAL

Application version: 1.1.10  
Build number: 30

## Integrated in this checkpoint

- Build 29 checkpoint SHA-256 verified before restoration.
- Per-view Staff and Tonic Sol-fa viewport state.
- Persistent zoom mode, zoom, page mode, current page, and focal anchor.
- Two-axis page anchoring for continuous, single, spread, and horizontal modes.
- Stable focal-page restoration after viewport and dock-sized changes.
- Scroll restoration clamped to real layout extents.
- Browser scroll anchoring disabled during authoritative reflow.
- Forced page-one reset removed from view and page-layout switching.
- Official navy, royal-blue, white, and gold design retained.

## Local validation completed

- JavaScript syntax: PASS - 63 files.
- Automated tests: PASS - 219/219.
- Performance gates: PASS - 6/6.
- Preview generation: PASS.
- Browser interaction checks: PASS - 46/46.
- Viewport matrix: PASS - 36/36 across four window/display-scale scenarios.
- Staff and Tonic Sol-fa screenshots generated.
- PDF header, page count, dimensions, and rendered PNG checked.
- Provisional checkpoint restoration: PASS.
- Restored automated tests: PASS - 219/219.
- Source manifest generation and final archive checksum verification: PASS.

## Confirmed blocker

The public npm registry ping timed out after 20 seconds. A clean dependency
restore could not be completed in this environment. `node_modules` is not
included in the checkpoint.

## Remaining production gates

- Clean dependency installation.
- Windows x64 Setup and Portable executables.
- PE metadata and artifact checksum verification.
- Installation, launch, `.airscore` association, upgrade, uninstall, and
  user-data preservation.
- Human Windows visual review.
- Independent Windows PDF/PNG inspection.
- Physical audio, MIDI, and printer tests.
- Code signing and Windows trust verification.
- Final requirement audit, self-critique, and Best-Version Exit Gate.

No GitHub write, workflow dispatch, tag, release, or artifact upload is
permitted while the embargo remains active.
