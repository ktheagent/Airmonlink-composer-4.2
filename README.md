# Airmonlink Composer 3 - Version 1.1.11 Build 31

Airmonlink Composer is a Windows desktop music-composition, staff-notation,
Tonic Sol-fa, playback, MIDI, MusicXML, publishing, and education application.

Build 31 continues the Build 29 physical-page workspace and Build 30 viewport
stabilization. It does not regenerate or replace the established application.

## Build 31 cross-page editing and output consistency

Build 31 adds one page-flow layer shared by Staff and Tonic Sol-fa:

- deterministic beat, event, selection, and measure-to-page mapping;
- page-aware selection reveal without discarding multi-page selections;
- playback page following with a temporary manual-navigation hold;
- current-page status that includes the visible measure range;
- stable previous, next, first, and last page targeting;
- page-boundary regression coverage for lyrics, delete, undo, redo, and reflow;
- one publication profile for print preview, PDF, PNG, and native printing;
- dynamic A4, Letter, Legal, A3, and A5 print-page orientation and margins;
- full-page PNG dimensions based on the same physical page specification;
- retained independent Staff and Tonic Sol-fa viewport sessions.

The navy, royal-blue, white, and gold Airmonlink identity remains unchanged.

## Run from source

```text
npm ci
npm start
```

## Full local validation

```text
npm run validate:full
```

## Release classification

**LOCAL CROSS-PAGE CONSISTENCY CHECKPOINT - NOT FINAL**

Windows Setup, Portable, installation, upgrade, uninstall, `.airscore`
association, signing, human Windows review, and physical audio, MIDI, printer,
and other device testing remain separate production gates.

`GITHUB_EMBARGO_STATUS: ACTIVE`
