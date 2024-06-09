import type { Product } from "@shared/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Noise Cancelling Earbuds",
    description: "Crystal clear sound",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579674862001-405e6b05fe0b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["5", "10"],
    discount: 10,
    featured: true,
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description: "Perfect for travel",
    price: 90,
    images: [
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["6", "11"],
    discount: 5,
    featured: false,
  },
  {
    id: "3",
    name: "Hi-Fi Stereo System",
    description: "Immersive audio experience",
    price: 500,
    images: [
      "https://images.unsplash.com/photo-1585605109191-03cc36051fcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1552252210-2e1dca567ae6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["12", "20"],
    discount: 30,
    featured: true,
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere",
    price: 70,
    images: [
      "https://images.unsplash.com/photo-1520860100614-a714deb4805f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603090383863-d39579d7d04f?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["7", "14"],
    discount: 0,
    featured: false,
  },
  {
    id: "5",
    name: "DJ Turntable",
    description: "For professional DJs",
    price: 800,
    images: [
      "https://images.unsplash.com/photo-1609320034460-9e455d374271?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597075383833-a10d2f819ca9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["2", "9"],
    discount: 50,
    featured: true,
  },
  {
    id: "6",
    name: "Gaming Headset",
    description: "Enhance your gaming experience",
    price: 100,
    images: [
      "https://images.unsplash.com/photo-1548030415-e1eb1c684c9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591105866700-cb5d708ccd93?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["3", "8"],
    discount: 15,
    featured: true,
  },
  {
    id: "7",
    name: "Studio Monitor Speakers",
    description: "Professional sound quality",
    price: 300,
    images: [
      "https://images.unsplash.com/photo-1588787811867-67fc9hoGJ9sA",
      "https://images.unsplash.com/photo-1575072030733-d89df1520ef1",
    ],
    relatedProducts: ["4", "13"],
    discount: 20,
    featured: false,
  },
  {
    id: "8",
    name: "Digital Audio Interface",
    description: "Connect your instruments digitally",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1641626077539-f44d8fa30a84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698825598805-c9e788e6cff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["6", "15"],
    discount: 10,
    featured: false,
  },
  {
    id: "9",
    name: "Vintage Record Player",
    description: "Classic design meets modern tech",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558584673-b3f73685d37f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    relatedProducts: ["1", "5"],
    discount: 25,
    featured: true,
  },
  {
    id: "10",
    name: "Wireless Soundbar",
    description: "Enhance your TV sound",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1506765515381-5a4a6eb9b13d",
      "https://images.unsplash.com/photo-1572732210703-e905bd2dbf8a",
    ],
    relatedProducts: ["1", "11"],
    discount: 10,
    featured: true,
  },
  {
    id: "11",
    name: "In-Ear Monitoring System",
    description: "Professional audio monitoring",
    price: 350,
    images: [
      "https://images.unsplash.com/photo-1583381929662-7c38616ecbe2",
      "https://images.unsplash.com/photo-1561233105-9b5f7c03aed6",
    ],
    relatedProducts: ["2", "10"],
    discount: 20,
    featured: false,
  },
  {
    id: "12",
    name: "Tube Amplifier",
    description: "Warm vintage sound",
    price: 400,
    images: [
      "https://images.unsplash.com/photo-1547230836-98c111bb8c5f",
      "https://images.unsplash.com/photo-1529296716920-ed4de6a97965",
    ],
    relatedProducts: ["3", "20"],
    discount: 15,
    featured: true,
  },
  {
    id: "13",
    name: "Microphone Set",
    description: "Professional recording quality",
    price: 200,
    images: [
      "https://images.unsplash.com/photo-1580750964223-25ecf113b62b",
      "https://images.unsplash.com/photo-1496951215169-1e1476ff2505",
    ],
    relatedProducts: ["4", "7"],
    discount: 10,
    featured: true,
  },
  {
    id: "14",
    name: "Car Audio System",
    description: "Revolutionize your driving experience",
    price: 600,
    images: [
      "https://images.unsplash.com/photo-1539521915751-cbe7418d7b41",
      "https://images.unsplash.com/photo-1589254868060-3e757aaf6492",
    ],
    relatedProducts: ["4", "7"],
    discount: 40,
    featured: false,
  },
  {
    id: "15",
    name: "Audio Mixer",
    description: "Control your sound like a pro",
    price: 350,
    images: [
      "https://images.unsplash.com/photo-1599226937855-d7cb7e952bf6",
      "https://images.unsplash.com/photo-1571780266572-54e18d9b7e7e",
    ],
    relatedProducts: ["6", "8"],
    discount: 20,
    featured: true,
  },
  {
    id: "16",
    name: "Karaoke Machine",
    description: "Fun for all ages",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1559439224-a9f052841216",
      "https://images.unsplash.com/photo-1512306292842-02b624f2cfbed",
    ],
    relatedProducts: ["1", "6"],
    discount: 5,
    featured: false,
  },
  {
    id: "17",
    name: "Wireless Microphone System",
    description: "Freedom to move on stage",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1540574071731-5541062eb822",
      "https://images.unsplash.com/photo-1558622033-6a2e06b1275b",
    ],
    relatedProducts: ["3", "9"],
    discount: 10,
    featured: false,
  },
  {
    id: "18",
    name: "Acoustic Panels Set",
    description: "Improve your room's acoustics",
    price: 80,
    images: [
      "https://images.unsplash.com/photo-1571712064808-18781131bc85",
      "https://images.unsplash.com/photo-1605784048713-6b80fb52f4e7",
    ],
    relatedProducts: ["2", "7"],
    discount: 5,
    featured: true,
  },
  {
    id: "19",
    name: "Bluetooth Speaker",
    description: "Very nice bass",
    price: 190,
    images: [
      "https://images.unsplash.com/photo-1589833870588-8a0902bcf55b",
      "https://images.unsplash.com/photo-1546518449-3826f84350e9",
    ],
    relatedProducts: ["9"],
    discount: 20,
    featured: true,
  },
  {
    id: "20",
    name: "Subwoofer",
    description: "Feel the low-end frequencies",
    price: 250,
    images: [
      "https://images.unsplash.com/photo-1556476556-478d1b63bb25",
      "https://images.unsplash.com/photo-1505699q777540-1a9ea7621715",
    ],
    relatedProducts: ["3", "12"],
    discount: 15,
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
export function getDiscountedProducts(): Product[] {
  return products.filter((p) => p.discount && p.discount > 0);
}

export function getManyProducts(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id));
}
