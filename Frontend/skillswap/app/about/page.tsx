import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FloatingNavDemo } from "@/components/NavbarDemo";
import {
  Users,
  Target,
  Rocket,
  Heart,
  Medal,
  Globe,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { Footer } from '@/components/Footer';

const About = () => {
  const stats = [
    { label: "Skills Shared", value: "10,000+" },
    { label: "Active Members", value: "50,000+" },
    { label: "Successful Swaps", value: "25,000+" },
    { label: "Countries Represented", value: "100+" },
  ];

  return (
    <div>
      <FloatingNavDemo />
      <div className="min-h-screen bg-background p-6 space-y-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <Card className="border-none shadow-none">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl md:text-6xl">
              Empowering Knowledge Through Skill Sharing
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl mx-auto">
              At SkillSwap, we believe in the power of collaboration and mutual growth. Join us to share, learn, and grow together through the exchange of skills and knowledge.
            </CardDescription>
          </CardHeader>
        </Card>

        <Separator />

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-3xl text-center">{stat.value}</CardTitle>
                <CardDescription className="text-center">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Separator />

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Collaboration",
                description: "We foster a supportive community where everyone can learn and grow together.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Diversity",
                description: "SkillSwap welcomes individuals from all walks of life to share and gain knowledge.",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Excellence",
                description: "We are committed to enabling the best skill-sharing experiences for our users.",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:bg-accent transition-colors">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-background flex items-center justify-center">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Meet the SkillSwap Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Atharva Joshi",
                role: "CEO & Founder",
                bio: "Passionate advocate for global learning and skill-sharing.",
              },
              {
                name: "Nityom Tikhe",
                role: "CTO",
                bio: "Tech visionary committed to building scalable, user-friendly platforms.",
              },
              {
                name: "Rushikesh Chaudhrai",
                role: "Community Manager",
                bio: "Dedicated to fostering meaningful connections in the SkillSwap community.",
              },
            ].map((member, index) => (
              <Card key={index} className="hover:bg-accent transition-colors">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="outline" className="mb-2">{member.role}</Badge>
                  <CardDescription>{member.bio}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Join the SkillSwap Movement</CardTitle>
            <CardDescription className="text-lg mb-6">
              Ready to share your skills or learn something new? Let's make it happen together!
            </CardDescription>
            <Button size="lg" className="group">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardHeader>
        </Card>
        <Footer />
      </div>
    </div>
  );
};

export default About;
