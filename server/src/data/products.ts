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
      "https://images.unsplash.com/photo-1641626077539-f44d8fa30a84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1698825598805-c9e788e6cff3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    relatedProducts: ["6", "15"],
    discount: 10,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1589416953443-610b87c5d2e1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1707820356995-4b439f50dc29?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
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
    images: ["https://d20tmfka7s58bt.cloudfront.net/jbl-soundbar.png"],
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
      "https://images.unsplash.com/photo-1709312903125-242d8f3375b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://d20tmfka7s58bt.cloudfront.net/iem.jpeg",
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
    images: ["https://d20tmfka7s58bt.cloudfront.net/tube-amp.jpeg"],
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
      "https://images.unsplash.com/photo-1554941426-5eb1f0a4e107?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://d20tmfka7s58bt.cloudfront.net/carplay-call.jpeg",
      "https://d20tmfka7s58bt.cloudfront.net/carplay-map.jpeg",
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
      "https://images.unsplash.com/photo-1500702790369-fe461685b3c8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1535406208535-1429839cfd13?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    images: ["https://d20tmfka7s58bt.cloudfront.net/karaoke-machine.webp"],
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
      "https://images.unsplash.com/photo-1698825598805-c9e788e6cff3?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://d20tmfka7s58bt.cloudfront.net/acoustic-panel.jpg",
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
