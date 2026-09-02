# Service Photos

Yahan har service ke liye ek alag folder hai. Real project photos yahan upload karein.

## Folders (services ke naam se)

| Folder | Service |
|---|---|
| `gypsum-false-ceiling/` | Gypsum False Ceiling |
| `pvc-ceiling/` | PVC Ceiling |
| `pvc-wall-paneling/` | PVC Wall Paneling |
| `wpc-wall-paneling/` | WPC Wall Paneling |
| `wpc-fluted-panels/` | WPC Fluted Panels |
| `grid-ceiling/` | Grid Ceiling |
| `wall-partition/` | Wall Partition |
| `tv-unit-interior-work/` | TV Unit & Interior Work |

## Photo upload karte waqt

- Har folder mein apni photos `1.jpg`, `2.jpg`, `3.jpg` ... is naming se daalein (ya `.png` / `.webp`).
- Achhi quality, achhi lighting wali photos best result dengi.
- File size ~500KB–1.5MB rakhein (bahut badi file site ko slow kar degi).

Jab real photos in folders mein aa jayein, to `components/site.tsx` mein `photoPool` aur `services` list ko in local paths (jaise `/services/gypsum-false-ceiling/1.jpg`) se update kar dena — abhi wahan Unsplash ki placeholder photos lagi hain.
