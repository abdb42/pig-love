
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Book, Users, MessageCircle } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm font-medium">
                <Heart className="h-4 w-4 mr-2 text-rose-500" />
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About Together
              </h1>
              <p className="text-lg text-slate-600">
                A beautiful space for couples to document their journey
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p>
                Together was born from a simple idea: relationships deserve to be
                documented. The small moments, the big milestones, the inside
                jokes, the challenges overcome—all of these create the unique
                story of two people choosing each other every day.
              </p>

              <p>
                In a world of fleeting digital interactions, we wanted to create
                a space that encourages thoughtful reflection and deep
                connection between partners. A private sanctuary where couples
                can be vulnerable, authentic, and intentional about recording
                their journey.
              </p>

              <h2>Our Philosophy</h2>

              <p>
                We believe that intentional journaling can transform
                relationships. By taking time to reflect, express gratitude, and
                articulate feelings, couples create a practice of mindfulness and
                appreciation that strengthens their bond.
              </p>

              <p>
                Together is designed with several core principles in mind:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <Book className="h-5 w-5 text-slate-900" />
                    </div>
                    <h3 className="text-lg font-semibold m-0">
                      Intentional Design
                    </h3>
                  </div>
                  <p className="text-slate-600 m-0">
                    A clean, minimal interface that eliminates distractions and
                    focuses on what matters: your words and experiences.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <Users className="h-5 w-5 text-slate-900" />
                    </div>
                    <h3 className="text-lg font-semibold m-0">
                      Shared Experience
                    </h3>
                  </div>
                  <p className="text-slate-600 m-0">
                    Equal contribution from both partners, creating a balanced
                    narrative of your relationship from two perspectives.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="h-5 w-5 text-slate-900" />
                    </div>
                    <h3 className="text-lg font-semibold m-0">
                      Meaningful Connection
                    </h3>
                  </div>
                  <p className="text-slate-600 m-0">
                    Prompts and features designed to deepen understanding and
                    foster appreciation between partners.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="h-5 w-5 text-slate-900" />
                    </div>
                    <h3 className="text-lg font-semibold m-0">
                      Private Sanctuary
                    </h3>
                  </div>
                  <p className="text-slate-600 m-0">
                    A secure space for authentic expression without the
                    performative nature of social media.
                  </p>
                </div>
              </div>

              <h2>Looking Forward</h2>

              <p>
                Together is just beginning its journey. We're committed to
                creating features that help couples document their unique love
                stories in meaningful ways, while maintaining the simplicity and
                elegance that makes journaling a joyful practice rather than
                another digital obligation.
              </p>

              <p>
                We hope that as you use Together, you'll discover new dimensions
                to your relationship, revisit cherished memories, and create a
                lasting record of your life with the person you love.
              </p>

              <p className="text-center italic mt-10">
                "In the journal I do not just express myself more openly than I
                could to any person; I create myself."
                <br />
                <span className="text-sm">— Susan Sontag</span>
              </p>
            </div>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default About;
