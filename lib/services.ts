export type Service = {
  slug: string
  name: string
  descriptionEn: string
  descriptionHi: string
  photoCount: number
}

export const services: Service[] = [
  { slug: 'gypsum-false-ceiling', name: 'Gypsum False Ceiling', descriptionEn: 'Modern gypsum ceiling designs with smooth finishing, lighting options and cove lighting for homes, offices and shops.', descriptionHi: 'घर, ऑफिस और दुकान के लिए सुंदर और आधुनिक फॉल्स सीलिंग।', photoCount: 6 },
  { slug: 'pvc-false-ceiling', name: 'PVC False Ceiling', descriptionEn: 'Practical PVC false ceiling solutions with easy maintenance and different designs for residential and commercial spaces.', descriptionHi: 'आसान रखरखाव और अलग-अलग डिजाइन वाली PVC फॉल्स सीलिंग।', photoCount: 6 },
  { slug: 'wall-partition', name: 'Wall Partition', descriptionEn: 'Room, office and shop partitions using gypsum board where suitable for clear, practical space division.', descriptionHi: 'कमरे, ऑफिस या दुकान में जगह को अलग करने के लिए पार्टिशन।', photoCount: 6 },
  { slug: 'grid-ceiling', name: 'Grid Ceiling', descriptionEn: 'A practical ceiling choice for offices, shops and commercial spaces with easy access for maintenance.', descriptionHi: 'ऑफिस, दुकान और कमर्शियल जगहों के लिए ग्रिड सीलिंग।', photoCount: 6 },
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
