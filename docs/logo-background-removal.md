# Preloader logo background extraction

The preloader continues to use `/images/season7-forest-logo-transparent-v3.webp`.
No logo asset or preloader source was changed by this extraction task because the
generated candidates did not satisfy the requirement to preserve the approved
logo exactly.

## Existing source inspection

- Official artwork: `public/images/season7-forest-logo.webp`, 2200 × 1727.
- Existing preloader artwork: `public/images/season7-forest-logo-transparent-v3.webp`,
  2200 × 1727, RGBA.
- The existing preloader asset contains 3,601,146 fully transparent pixels
  (94.782%), 198,254 opaque pixels, and no partially transparent pixels.
- The dark photographic background has already been mostly removed, but scattered
  pine-needle fragments remain visible. Therefore complete background removal
  remains outstanding.
- The principal ivory artwork occupies approximately x=396–1814, y=389–1295 in
  the original canvas, excluding isolated bright foliage pixels. These bounds were
  inspected through connected ivory regions, not used to edit the artwork.

## Tool and candidates

Mode: built-in `image_gen.imagegen`, using the imagegen skill's
`background-extraction` workflow. No fallback CLI or manual pixel editing was used.

1. A first extraction from the existing transparent-v3 image produced
   `C:\Users\hp\.codex\generated_images\01a1057e-d5be-7eb1-8530-40c4fdeb0112\exec-856fbbc5-9e49-4f0e-ac4e-1192fba0d081.png`.
   Its 1415 × 1111 canvas retained approximately the original relative bounds,
   but it added conspicuous white speckling around letters and within the monogram.
2. The final extraction attempt used the original photographic-background WebP
   as its edit target and produced
   `C:\Users\hp\.codex\generated_images\01a10583-c325-73d0-8628-88246163f8cd\exec-63ac5839-4c74-479a-8e8c-1ec5c4371289.png`.
   This candidate is also 1415 × 1111 with an alpha channel. It contains white
   splatter, altered edges, and significantly enlarged artwork: ivory bounds are
   approximately x=70–1345, y=201–963. The wordmark spans about 90.1% of the canvas
   width, compared with about 64.5% in the original. It cannot replace the approved
   asset without changing its appearance.

Both candidates were rejected and left outside project asset references.
The unchanged existing logo remains preferable to a visibly altered replacement.

## Final prompt

```text
Use case: background-extraction.
Asset type: transparent PNG logo for an existing resort website preloader.
Edit target: the attached original Season7 logo image, 2200 x 1727 pixels.
Primary request: Remove ONLY the dark green photographic pine/forest backdrop completely, leaving only the exact original warm ivory logo artwork on actual alpha transparency. The artwork consists of the upper S7 monogram with its integrated three-leaf sprig, the large SEASON7 wordmark (including the decorative leaf in A), and the small text THE NATURE RESORT with a thin horizontal line on both sides.
Invariants: Keep every original ivory stroke and letter shape exactly, preserve its exact existing warm ivory color, spacing, stroke weight, relative proportions, alignment, overall scale, and location within the same canvas. Do not restyle, retype, redraw, brighten, recolor, simplify, crop, center differently, or change the logo. No other content.
Transparency: every background pixel outside the ivory logo must have alpha zero, including between letters and inside all counters and the S7 monogram. Completely remove every pine needle, branch, green/black region and isolated speck. Clean smooth antialiased edges, solid undamaged ivory stroke interiors. No noise, texture, white splatter, residual ghost outlines, checkerboard pixels, new outline, shadow, border, or opaque background. Preserve the original 2200x1727 canvas or its exact aspect ratio. This is identity-preserving background removal only, not a logo redesign.
```

## Remaining work

A clean original transparent/vector logo, or an explicitly requested deterministic
background-mask edit, is needed to finish extraction without altering the artwork.
The existing preloader timing, styling, layout, source path, and 160 × 160 display
size remain unchanged.
