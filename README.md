# GearWorks — Built for Drivers

An explorable automotive workshop built with Three.js and Vite. Created by Amir Saeid Dehghan.

## Run

```sh
npm ci
npm run dev
npm run build
```

## Experience

- A licensed, Draco-compressed 911 Carrera 4S GLB with orange PBR paint and an original GT3 RS-inspired aero package.
- Fully modeled garage, tools, hydraulic lift, diagnostics, tire stacks and mountain landscape.
- Clickable geometry and accessible hotspot buttons. Camera transitions use cubic easing; drag and pinch controls support inspection.
- Eleven educational stops, headlights, airflow, simplified X-ray components and unloaded lift-arm demonstration.
- Search, services, creator information and a downloadable service planner. The concept does not send appointment requests or claim confirmed bookings.
- Mobile layout, reduced motion, keyboard orbit controls, muted-by-default synthesized ambience and loading/error recovery.

Model attribution is in ATTRIBUTION.md and the in-app Credits dialog. The base car is not an exact GT3 RS replica. Business statistics from the visual brief are illustrative.

## Deployment

GitHub Actions builds `dist` and deploys it to GitHub Pages on main. If Pages is not yet enabled, select **Settings → Pages → Source → GitHub Actions**. The workflow attempts automatic enablement where GitHub allows it.

## Controls

Click a hotspot or object to inspect it. Escape closes a detail panel. Home resets the camera. With the canvas focused, left/right arrows rotate and +/- zoom. The 360° dock item supports drag and pinch. Search provides a keyboard-accessible list of all components.

## Implementation

`src/main.js`: renderer, UI, camera and interaction lifecycle.
`src/workshop.js`: architectural geometry, tools and landscape.
`src/car.js`: licensed GLB and custom aero/technical components.
`src/content.js`: camera presets and educational content.
`src/style.css`: responsive interface.

Performance is device-dependent; no universal FPS guarantee is made. Mobile lowers pixel ratio, shadow resolution and particle count. The page pauses rendering when hidden.
