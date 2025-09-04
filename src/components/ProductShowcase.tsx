import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Watch, Speaker, Cpu, Shield, Zap } from "lucide-react";
import mobileDevice from "@/assets/mobile-device.jpg";
import smartwatch from "@/assets/smartwatch.jpg";
import aiSpeaker from "@/assets/ai-speaker.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: "mobile",
      title: "Mobile Devices",
      description: "Next-generation smartphones with AI-powered features and seamless connectivity.",
      image: mobileDevice,
      icon: Smartphone,
      features: ["5G Connectivity", "AI Camera", "All-day Battery"],
    },
    {
      id: "watch",
      title: "Smart Watches",
      description: "Advanced wearables that monitor your health and keep you connected on the go.",
      image: smartwatch,
      icon: Watch,
      features: ["Health Monitoring", "GPS Tracking", "7-day Battery"],
    },
    {
      id: "speaker",
      title: "AI Speakers",
      description: "Intelligent voice assistants that understand and adapt to your lifestyle.",
      image: aiSpeaker,
      icon: Speaker,
      features: ["Voice Control", "Smart Home Hub", "Premium Audio"],
    },
  ];

  const highlights = [
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Advanced machine learning capabilities in every device"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security protecting your data"
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Lightning-fast performance and instant responses"
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary <span className="text-brand-blue">IoT Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our suite of intelligent devices designed to transform how you interact with technology.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-blue rounded-xl mr-4">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="hero-outline" className="group w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-dark">
              <div className="inline-flex p-4 bg-gradient-blue rounded-2xl mb-6">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground-light mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;