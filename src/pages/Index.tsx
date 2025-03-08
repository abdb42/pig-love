
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ChevronRight, BookOpen, Sparkles, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const features = [
  {
    title: "Share your journey",
    description:
      "Document special moments, thoughts, and feelings in a beautiful shared space that grows with your relationship.",
    icon: BookOpen,
  },
  {
    title: "Connect deeper",
    description:
      "Create a sacred space for reflection, gratitude, and understanding through the power of writing together.",
    icon: Heart,
  },
  {
    title: "Create memories",
    description:
      "Build a meaningful digital keepsake of your relationship that you'll cherish for years to come.",
    icon: Sparkles,
  },
];

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm font-medium">
                <Heart className="h-4 w-4 mr-2 text-rose-500" />
                A journal for two
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight"
            >
              Document your love story,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                one entry at a time
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 max-w-2xl"
            >
              Together is a beautiful, minimalist journaling app designed for couples to capture memories, reflect on their relationship, and grow closer through shared writing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Link to="/journal">
                <Button
                  className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 h-auto text-base font-medium shadow-sm"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Start Journaling</span>
                  <ChevronRight
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  variant="outline"
                  className="rounded-full border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-400 px-8 py-6 h-auto text-base font-medium"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Journal together, grow together
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Create a meaningful narrative of your relationship through shared journaling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center">
            <Smile className="h-12 w-12 text-slate-900 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 max-w-2xl">
              Start your couple's journaling experience today
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Create a beautiful digital keepsake of your relationship that you'll cherish for years to come.
            </p>
            <Link to="/journal">
              <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 h-auto text-base font-medium shadow-sm">
                <span>Begin Your Journey</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
