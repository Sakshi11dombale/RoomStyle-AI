
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { GalleryHorizontal, Search } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Enhanced inspiration data with more items and reliable image sources
const inspirationData = [
  {
    id: 1,
    title: "Scandinavian Living Room",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    style: "scandinavian",
    likes: 245,
    colors: ["#FFFFFF", "#F8F7F1", "#E9E2D0", "#878787", "#363636"]
  },
  {
    id: 2,
    title: "Modern Minimalist Dining",
    image: "https://images.unsplash.com/photo-1615529179246-97586655ac09?w=800&q=80",
    style: "minimalist",
    likes: 198,
    colors: ["#FFFFFF", "#EBEBEB", "#B9B9B9", "#485053", "#000000"]
  },
  {
    id: 3,
    title: "Industrial Style Loft",
    image: "https://images.unsplash.com/photo-1596204976717-1a9ffce8e22b?w=800&q=80",
    style: "industrial",
    likes: 176,
    colors: ["#D7D2CB", "#A59A8C", "#6C6258", "#403F3F", "#13110E"]
  },
  {
    id: 4,
    title: "Mid-Century Modern Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    style: "mid-century",
    likes: 142,
    colors: ["#F7F5F2", "#DCDBD5", "#977F5D", "#543C30", "#2E282A"]
  },
  {
    id: 5,
    title: "Boho Chic Bedroom",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
    style: "bohemian",
    likes: 224,
    colors: ["#F0EDE8", "#E1CAC7", "#A16C5F", "#586169", "#333538"]
  },
  {
    id: 6,
    title: "Contemporary Kitchen",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80",
    style: "contemporary",
    likes: 187,
    colors: ["#FFFFFF", "#F2F2F0", "#B6B5B3", "#6A675F", "#1E1D19"]
  },
  // Adding new inspiration items
  {
    id: 7,
    title: "Japandi Living Space",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=800&q=80",
    style: "minimalist",
    likes: 156,
    colors: ["#F8F8F8", "#E1DFDB", "#B6B0A9", "#726E6A", "#2D2926"]
  },
  {
    id: 8,
    title: "Art Deco Lounge",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    style: "contemporary",
    likes: 213,
    colors: ["#EEECE4", "#CDB599", "#BB8B54", "#74482E", "#332518"]
  },
  {
    id: 9,
    title: "Coastal Beach House",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    style: "coastal",
    likes: 198,
    colors: ["#FFFFFF", "#EAE6E0", "#B8C9D0", "#5B86A5", "#2B4C63"]
  },
  {
    id: 10,
    title: "Farmhouse Style Kitchen",
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80",
    style: "farmhouse",
    likes: 167,
    colors: ["#F7F4F0", "#E5DFD9", "#AEA79F", "#7C6F63", "#3A322C"]
  },
  {
    id: 11,
    title: "Urban Loft Workspace",
    image: "https://images.unsplash.com/photo-1596194953433-41138a818f6f?w=800&q=80",
    style: "industrial",
    likes: 145,
    colors: ["#F2F2F2", "#D3CDC7", "#8A8480", "#4D4A48", "#1F1D1B"]
  },
  {
    id: 12,
    title: "Rustic Mountain Cabin",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&q=80",
    style: "rustic",
    likes: 189,
    colors: ["#E6E2DD", "#C8B5A6", "#8B7B6B", "#5D4E41", "#30271C"]
  }
];

// Style filters with added styles
const styleFilters = [
  { id: "all", name: "All Styles" },
  { id: "scandinavian", name: "Scandinavian" },
  { id: "minimalist", name: "Minimalist" },
  { id: "industrial", name: "Industrial" },
  { id: "mid-century", name: "Mid-Century" },
  { id: "bohemian", name: "Bohemian" },
  { id: "contemporary", name: "Contemporary" },
  { id: "coastal", name: "Coastal" },
  { id: "farmhouse", name: "Farmhouse" },
  { id: "rustic", name: "Rustic" }
];

const Inspiration = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [inspirations, setInspirations] = useState(inspirationData);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
    
    if (filterId === "all") {
      setInspirations(inspirationData);
    } else {
      const filtered = inspirationData.filter(item => item.style === filterId);
      setInspirations(filtered);
    }
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inspirations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inspirations.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <main className="py-10">
        <div className="content-container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Design Inspiration</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore curated interior designs to inspire your next home transformation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="overflow-x-auto">
              <div className="flex space-x-2 min-w-max pb-2">
                {styleFilters.map((filter) => (
                  <Button 
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    className={activeFilter === filter.id ? "bg-design-terracotta hover:bg-design-terracotta/90" : ""}
                    onClick={() => handleFilterChange(filter.id)}
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className={viewMode === 'grid' ? "bg-muted" : ""} 
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <GalleryHorizontal className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className={viewMode === 'carousel' ? "bg-muted" : ""}
                onClick={() => setViewMode('carousel')}
                title="Carousel View"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to a reliable placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=800&q=80";
                        }}
                      />
                      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="mr-1"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <span>{item.likes}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-semibold mb-2">{item.title}</h3>
                      <div className="flex space-x-1 mb-3">
                        {item.colors.map((color, index) => (
                          <div 
                            key={index}
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: color }}
                            title={color}
                          ></div>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-design-terracotta hover:text-design-terracotta/90 p-0">
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem key={i + 1}>
                          <PaginationLink 
                            isActive={currentPage === i + 1}
                            onClick={() => handlePageChange(i + 1)}
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <div className="px-4 md:px-12 mb-10">
              <Carousel className="w-full">
                <CarouselContent>
                  {currentItems.map((item) => (
                    <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-64 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?w=800&q=80";
                            }}
                          />
                          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="mr-1"
                            >
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                            <span>{item.likes}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif font-semibold mb-2">{item.title}</h3>
                          <div className="flex space-x-1 mb-3">
                            {item.colors.map((color, index) => (
                              <div 
                                key={index}
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: color }}
                                title={color}
                              ></div>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="w-full justify-start text-design-terracotta hover:text-design-terracotta/90 p-0">
                            View Details
                          </Button>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 sm:-left-4 lg:-left-6" />
                <CarouselNext className="right-0 sm:-right-4 lg:-right-6" />
              </Carousel>

              <div className="mt-4 text-center">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink 
                          isActive={currentPage === i + 1}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Inspiration;
