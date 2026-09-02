# Service Photos

Yahan har service ke liye ek alag folder hai. Real project photos yahan upload karein.

## Folders (services ke naam se)

| Folder | Service |
|---|---|
| `gypsum-false-ceiling/` | Gypsum False Ceiling |
| `pvc-false-ceiling/` | PVC False Ceiling |
| `wall-partition/` | Wall Partition |
| `grid-ceiling/` | Grid Ceiling |

## Photo upload karte waqt

- Har folder mein apni photos `1.jpg`, `2.jpg`, `3.jpg` ... is naming se daalein (ya `.png` / `.webp`).
- Achhi quality, achhi lighting wali photos best result dengi.
- File size ~500KB–1.5MB rakhein (bahut badi file site ko slow kar degi).

Site ab in local photos ko hi use karti hai (`lib/services.ts` mein `servicePhoto()`), Unsplash placeholders hata diye gaye hain. Har folder mein currently 6 photos hain (`1.jpg` se `6.jpg`) — pehli photo (`1.jpg`) us service ka main/cover photo hoti hai jo services grid, hero aur uske apne details page (`/services/<folder-name>`) par dikhti hai.

Nayi service add karni ho to `lib/services.ts` ki `services` list mein entry add karein aur uska `photoCount` set karein (jab tak photos upload na ho, `photoCount: 0` rakhein — us service ka card "Photos coming soon" dikhayega aur uske details page par WhatsApp CTA).
