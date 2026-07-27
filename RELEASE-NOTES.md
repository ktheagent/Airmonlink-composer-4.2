# Airmonlink Composer 3 - 1.1.11 Build 31 Checkpoint Notes

## Purpose

Build 31 improves editing and navigation where a score crosses physical-page
boundaries. It also makes the renderer, print preview, PDF, PNG, and native
printing use one publication-page profile.

## Integrated changes

The new page-flow service maps score beats, measures, event identifiers, and
selections to their owning physical pages. Staff and Tonic Sol-fa use the same
page-range model. Selection reveal keeps the current page when part of a
multi-page selection is already visible and follows the selection anchor when
the user chooses a specific event.

Playback can follow the current musical page. Manual scrolling or page
navigation temporarily suspends automatic following so playback does not fight
the user. The status bar now reports the current page, visible measure range,
and zoom.

Print preview, PDF, PNG, and native print requests now share page size,
orientation, margins, page count, view, and pagination identity. Staff PNG
export creates a complete physical page instead of sizing the image only from
the notation SVG.

## Still required

Build 31 remains subject to clean dependency restoration, Windows x64 Setup and
Portable compilation, PE metadata checks, installation, application startup,
`.airscore` association, upgrade, uninstall, signing, human Windows visual
inspection, independent PDF/PNG inspection, and physical audio, MIDI, printer,
and other device testing.

`GITHUB_EMBARGO_STATUS: ACTIVE`
