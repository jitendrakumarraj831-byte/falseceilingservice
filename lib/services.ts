export type Service = {
  slug: string
  name: string
  descriptionEn: string
  descriptionHi: string
  photoCount: number
  photoAlts: string[]
}

export const services: Service[] = [
  {
    slug: 'gypsum-false-ceiling',
    name: 'Gypsum False Ceiling',
    descriptionEn: 'Modern gypsum ceiling designs with smooth finishing, lighting options and cove lighting for homes, offices and shops.',
    descriptionHi: 'घर, ऑफिस और दुकान के लिए सुंदर और आधुनिक फॉल्स सीलिंग।',
    photoCount: 6,
    photoAlts: [
      'Rectangular gypsum false ceiling with wood-panel centre insert and cove lighting, Chandigarh home',
      'Gypsum false ceiling with linear LED strip lighting design and ceiling fan, Chandigarh living room',
      'Multi-layer gypsum false ceiling with geometric LED light pattern, Manimajra Chandigarh interior',
      'Box-type gypsum false ceiling with square LED lighting design for a Chandigarh bedroom',
      'Diamond-shaped gypsum false ceiling with wooden fluted panel centre and cove lighting',
      'Gypsum false ceiling with textured centre panel and blue-warm LED cove lighting, Chandigarh living room',
    ],
  },
  {
    slug: 'pvc-false-ceiling',
    name: 'PVC False Ceiling',
    descriptionEn: 'Practical PVC false ceiling solutions with easy maintenance and different designs for residential and commercial spaces.',
    descriptionHi: 'आसान रखरखाव और अलग-अलग डिजाइन वाली PVC फॉल्स सीलिंग।',
    photoCount: 6,
    photoAlts: [
      'PVC panel TV unit wall design with textured finish and blue LED accent lighting, Chandigarh',
      'PVC false ceiling with dark wood-tone finish and warm cove lighting border, Chandigarh interior',
      'PVC false ceiling in dark stone-pattern finish with layered LED lighting design and ceiling fan',
      'White PVC panel ceiling with blue LED border lighting and ceiling fan, Chandigarh',
      'PVC panel ceiling with wood-tone finish and blue LED lighting, Chandigarh false ceiling work',
      'PVC panel ceiling in dark marble-pattern finish with warm cove lighting and ceiling fan',
    ],
  },
  {
    slug: 'wall-partition',
    name: 'Wall Partition',
    descriptionEn: 'Room, office and shop partitions using gypsum board where suitable for clear, practical space division.',
    descriptionHi: 'कमरे, ऑफिस या दुकान में जगह को अलग करने के लिए पार्टिशन।',
    photoCount: 6,
    photoAlts: [
      'Metal-stud gypsum partition wall framing under construction in a Chandigarh commercial space',
      'Gypsum board partition wall installation with taping and jointing, Chandigarh office',
      'Finished gypsum partition wall enclosing a cabin with a window, Manimajra Chandigarh',
      'Metal stud framing for a gypsum partition wall in a Chandigarh office space',
      'Finished gypsum partition walls with door and window openings, Chandigarh office corridor',
      'Gypsum board partition wall under construction on a metal stud frame, Chandigarh',
    ],
  },
  {
    slug: 'grid-ceiling',
    name: 'Grid Ceiling',
    descriptionEn: 'A practical ceiling choice for offices, shops and commercial spaces with easy access for maintenance.',
    descriptionHi: 'ऑफिस, दुकान और कमर्शियल जगहों के लिए ग्रिड सीलिंग।',
    photoCount: 6,
    photoAlts: [
      'Grid false ceiling with perforated tiles and recessed lighting in a Chandigarh shop',
      'Grid false ceiling with tegular tiles and cove lighting in a retail store, Chandigarh',
      'Close-up of perforated grid ceiling tiles, Chandigarh commercial interior',
      'Perforated grid ceiling tile with an integrated LED panel light, Chandigarh',
      'Diamond-pattern grid ceiling with cove lighting and AC diffuser, Chandigarh office',
      'Perforated grid ceiling tiles in a hallway, Manimajra Chandigarh',
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function servicePhoto(slug: string, n: number): string {
  return `${slug}/${n}.jpg`
}

export function img(path: string): string {
  return `/services/${path}`
}

export function serviceGallery(slug: string): string[] {
  const count = getService(slug)?.photoCount ?? 0
  return Array.from({ length: count }, (_, i) => servicePhoto(slug, i + 1))
}

export function getPhotoAlt(slug: string, n: number): string {
  return getService(slug)?.photoAlts[n - 1] ?? `${slug.replace(/-/g, ' ')} photo ${n}`
}
