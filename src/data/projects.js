const list = [
  { id: 'hillside-house', title: 'Hillside family house', type: 'Residential', place: 'Bistritsa, Sofia', year: 2023, size: '240 m²', duration: '11 months', summary: 'A two-storey family home with a brick facade, underfloor heating and a south-facing terrace.' },
  { id: 'business-centre', title: 'Business centre', type: 'Commercial', place: 'Sofia', year: 2022, size: '3,200 m²', duration: '18 months', summary: 'A five-floor office building with underground parking, delivered on schedule.' },
  { id: 'apartment-refit', title: 'Apartment renovation', type: 'Renovation', place: 'Lozenets, Sofia', year: 2024, size: '95 m²', duration: '3 months', summary: 'A 1980s apartment with a new layout, new wiring and plumbing, and a rebuilt kitchen.', before: '/images/apartment-refit-before.jpg' },
  { id: 'logistics-warehouse', title: 'Logistics warehouse', type: 'Commercial', place: 'Plovdiv', year: 2021, size: '5,400 m²', duration: '9 months', summary: 'A steel-frame warehouse with loading docks and a fire-safety system.' },
  { id: 'villa-roof', title: 'Villa roof replacement', type: 'Renovation', place: 'Varna', year: 2024, size: '180 m²', duration: '5 weeks', summary: 'A leaking tile roof replaced with insulated metal tiles.' },
  { id: 'townhouse-row', title: 'Townhouse row', type: 'Residential', place: 'Plovdiv', year: 2022, size: '620 m²', duration: '14 months', summary: 'Four connected townhouses with private gardens and shared parking.' }
]
export const projects = list.map(p => ({ ...p, image: `/images/${p.id}.jpg` }))
export const projectTypes = ['All', 'Residential', 'Commercial', 'Renovation']
