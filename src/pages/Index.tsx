import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { Crown, Vote, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { getBatchACategories, getBatchBCategories } from "@/data/mockData";
import heroImage from "@/assets/hero-banner.jpg";

const Index = () => {
  const batchACategories = getBatchACategories();
  const batchBCategories = getBatchBCategories();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Kwara Vendors Award"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Crown className="h-16 w-16 mx-auto mb-4 text-primary-glow" />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Kwara Vendors Award 2024
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Celebrating excellence in Kwara State's vibrant marketplace
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="#categories">
              <Vote className="h-5 w-5 mr-2" />
              Start Voting
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Batch A */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge variant="default" className="mb-4 text-lg px-4 py-2">
                Batch A - Now Voting!
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Current Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vote for your favorite vendors in these categories. You can vote up to 5 times per day per category.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batchACategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  batch={category.batch}
                  participantCount={category.participants.length}
                  isActive={category.isActive}
                  description={category.description}
                />
              ))}
            </div>
          </div>

          {/* Batch B */}
          <div>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                Batch B - Coming Soon
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Upcoming Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These categories will be available for voting in the next phase.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batchBCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  batch={category.batch}
                  participantCount={category.participants.length}
                  isActive={category.isActive}
                  description={category.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
