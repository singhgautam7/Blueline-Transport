# Image assets

Drop real photography here so it can replace the design's placeholder graphics.

## What to add (suggested names)

| File                | Used for                          | Recommended size      |
| ------------------- | --------------------------------- | --------------------- |
| `hero-highway.jpg`  | Hero image (trucks / NH-48)       | 1600×1200, landscape  |
| `fleet-lcv.jpg`     | Fleet card — Mini / LCV           | 800×600               |
| `fleet-container.jpg` | Fleet card — Container          | 800×600               |
| `fleet-trailer.jpg` | Fleet card — Trailer              | 800×600               |
| `fleet-flatbed.jpg` | Fleet card — Open / Flatbed       | 800×600               |
| `og-cover.svg`      | Social share preview (already provided — replace with a photo version if desired) | 1200×630 |
| Client logos        | `clients/<brand>.svg` once usage rights are cleared | transparent PNG/SVG |

## How to wire a photo in

The placeholder graphics are inline SVGs in the section components
(`src/components/Hero.tsx`, `FleetSection.tsx`). To use a real photo, swap the
placeholder block for an image, e.g. in `Hero.tsx`:

```tsx
import Image from "next/image";
// ...
<Image src="/images/hero-highway.jpg" alt="Blueline truck on NH-48" fill className="object-cover" />
```

> Note: this project uses `images.unoptimized: true` (required for static export),
> so `next/image` serves files as-is — keep them reasonably compressed.

**Always add descriptive `alt` text.** Only add client/brand logos once you have
written permission to display them.
