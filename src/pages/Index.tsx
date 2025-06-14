
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-design-cream py-20">
          <div className="content-container">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-design-charcoal mb-4 leading-tight">
                  Transform Your Space with AI-Powered Design
                </h1>
                <p className="text-lg mb-8 text-gray-600">
                  Upload a photo of your room and get instant style suggestions, color palettes, 
                  and furniture recommendations tailored just for you.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button asChild size="lg" className="bg-design-terracotta hover:bg-design-terracotta/90 text-white">
                    <Link to="/analyzer">Analyze My Room</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/inspiration">Browse Inspiration</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" 
                    alt="Modern living room design" 
                    className="rounded-lg shadow-lg w-full animate-fade-in"
                  />
                  <div className="absolute -bottom-10 -left-10 hidden md:block">
                    <img 
                      src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80" 
                      alt="Interior design accent" 
                      className="rounded-lg shadow-lg w-64 h-48 object-cover animate-fade-in"
                      style={{animationDelay: '0.2s'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="content-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-4">How RoomStyle AI Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get professional interior design suggestions in just three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-design-cream rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-serif font-bold text-design-terracotta">1</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Upload Your Room</h3>
                <p className="text-gray-600">
                  Take a photo of your room and upload it to our AI-powered platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-design-cream rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-serif font-bold text-design-terracotta">2</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your space and identifies your room's potential.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-design-cream rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-serif font-bold text-design-terracotta">3</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Get Recommendations</h3>
                <p className="text-gray-600">
                  Receive style suggestions, color palettes, and furniture recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="content-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-4">Design Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the powerful tools that will help transform your space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-design-blue/20 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-design-blue">
                        <path d="M2 6l10.13-2.02a2 2 0 0 1 .74 0L23 6"></path>
                        <path d="M3 10v4c0 2.5 3 4 3 4h12s3-1.5 3-4v-4"></path>
                        <path d="M3 10c0-3.5 9-3.5 9 0 0-3.5 9-3.5 9 0"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Style Identification</h3>
                  <p className="text-gray-600 mb-4">
                    Our AI recognizes your current style and suggests complementary design directions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-design-terracotta/20 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-design-terracotta">
                        <circle cx="13.5" cy="6.5" r="2.5"></circle>
                        <circle cx="19.5" cy="12.5" r="2.5"></circle>
                        <circle cx="6.5" cy="12.5" r="2.5"></circle>
                        <circle cx="17.5" cy="19.5" r="2.5"></circle>
                        <line x1="13.5" y1="9" x2="13.5" y2="9.01"></line>
                        <line x1="19.5" y1="15" x2="19.5" y2="15.01"></line>
                        <line x1="6.5" y1="15" x2="6.5" y2="15.01"></line>
                        <line x1="17.5" y1="22" x2="17.5" y2="22.01"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Color Palettes</h3>
                  <p className="text-gray-600 mb-4">
                    Get perfectly harmonized color schemes based on your room's lighting and dimensions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-design-sage/20 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-design-sage">
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Furniture Recommendations</h3>
                  <p className="text-gray-600 mb-4">
                    Discover furniture pieces that complement your space and match your preferred style.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="content-container">
            <div className="bg-design-charcoal rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Upload a photo of your room and get professional design recommendations in minutes.
              </p>
              <Button asChild size="lg" className="bg-design-terracotta hover:bg-design-terracotta/90">
                <Link to="/analyzer">Start Your Design Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
