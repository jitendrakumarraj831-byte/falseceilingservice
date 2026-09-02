# Service Photos

Yahan har service ke liye ek alag folder hai. Real project photos yahan upload karein.

## Folders (services ke naam se)

| Folder | Service |
|---|---|
| `gypsum-false-ceiling/` | Gypsum False Ceiling |
| `pvc-false-ceiling/` | PVC False Ceiling |
| `wall-partition/` | Wall Partition |
| `grid-ceiling/` | Grid Ceiling — **pending**: photos upload hone ke baad hi ye service site par live hogi |

## Photo upload karte waqt

- Har folder mein apni photos `1.jpg`, `2.jpg`, `3.jpg` ... is naming se daalein (ya `.png` / `.webp`).
- Achhi quality, achhi lighting wali photos best result dengi.
- File size ~500KB–1.5MB rakhein (bahut badi file site ko slow kar degi).

Site ab in local photos ko hi use karti hai (`components/site.tsx` mein `servicePhoto()`), Unsplash placeholders hata diye gaye hain. Har folder mein currently 6 photos hain (`1.jpg` se `6.jpg`) — pehli photo (`1.jpg`) us service ka main/cover photo hoti hai jo services grid aur hero mein dikhti hai. Nayi photo add karni ho to agla number use karein aur `SERVICE_PHOTO_COUNT` (components/site.tsx) update kar dein agar total count badalta hai.
