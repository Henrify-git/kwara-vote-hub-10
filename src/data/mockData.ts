export interface Participant {
  id: string;
  name: string;
  image: string;
  votes: number;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  batch: "A" | "B";
  isActive: boolean;
  description: string;
  participants: Participant[];
}

export const mockCategories: Category[] = [
  // Batch A Categories (Active)
  {
    id: "best-yam-vendor",
    name: "Best Yam Vendor",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=400&h=300&fit=crop",
    batch: "A",
    isActive: true,
    description: "Celebrating the finest yam vendors in Kwara State",
    participants: [
      {
        id: "yam-1",
        name: "Mama Sidi",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-yam-vendor"
      },
      {
        id: "yam-2",
        name: "Alhaji Musa",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-yam-vendor"
      },
      {
        id: "yam-3",
        name: "Mrs. Folake",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-yam-vendor"
      }
    ]
  },
  {
    id: "best-rice-vendor",
    name: "Best Rice Vendor",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    batch: "A",
    isActive: true,
    description: "Honoring excellence in rice trading and quality",
    participants: [
      {
        id: "rice-1",
        name: "Abdullahi Stores",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-rice-vendor"
      },
      {
        id: "rice-2",
        name: "Hajiya Fatima",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-rice-vendor"
      }
    ]
  },
  {
    id: "best-tomato-vendor",
    name: "Best Tomato Vendor",
    image: "https://images.unsplash.com/photo-1546470427-4cfea97e2a6a?w=400&h=300&fit=crop",
    batch: "A",
    isActive: true,
    description: "Fresh tomatoes, excellent service, fair prices",
    participants: [
      {
        id: "tomato-1",
        name: "Baba Tunde",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-tomato-vendor"
      },
      {
        id: "tomato-2",
        name: "Sister Mary",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-tomato-vendor"
      },
      {
        id: "tomato-3",
        name: "Mama Ngozi",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-tomato-vendor"
      }
    ]
  },
  {
    id: "best-fabric-vendor",
    name: "Best Fabric Vendor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    batch: "A",
    isActive: true,
    description: "Quality fabrics and traditional textiles",
    participants: [
      {
        id: "fabric-1",
        name: "Adunni Textiles",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-fabric-vendor"
      },
      {
        id: "fabric-2",
        name: "Chief Adebayo",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-fabric-vendor"
      }
    ]
  },
  {
    id: "best-phone-vendor",
    name: "Best Phone Vendor",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    batch: "A",
    isActive: true,
    description: "Mobile phones, accessories, and tech support",
    participants: [
      {
        id: "phone-1",
        name: "TechHub Plaza",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-phone-vendor"
      },
      {
        id: "phone-2",
        name: "Digital World",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-phone-vendor"
      }
    ]
  },

  // Batch B Categories (Coming Soon)
  {
    id: "best-fish-vendor",
    name: "Best Fish Vendor",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    batch: "B",
    isActive: false,
    description: "Fresh fish and seafood suppliers",
    participants: [
      {
        id: "fish-1",
        name: "Fisherman's Choice",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-fish-vendor"
      }
    ]
  },
  {
    id: "best-meat-vendor",
    name: "Best Meat Vendor",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop",
    batch: "B",
    isActive: false,
    description: "Quality meat and butcher services",
    participants: [
      {
        id: "meat-1",
        name: "Premium Meats",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-meat-vendor"
      }
    ]
  },
  {
    id: "best-shoe-vendor",
    name: "Best Shoe Vendor",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
    batch: "B",
    isActive: false,
    description: "Footwear for every occasion",
    participants: [
      {
        id: "shoe-1",
        name: "Sole Comfort",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        votes: 0,
        categoryId: "best-shoe-vendor"
      }
    ]
  }
];

export const getCategory = (id: string): Category | undefined => {
  return mockCategories.find(category => category.id === id);
};

export const getBatchACategories = (): Category[] => {
  return mockCategories.filter(category => category.batch === "A");
};

export const getBatchBCategories = (): Category[] => {
  return mockCategories.filter(category => category.batch === "B");
};