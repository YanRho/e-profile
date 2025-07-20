"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brbergenholtz.19@outlook.com",
      href: "mailto:brbergenholtz.19@outlook.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Long Beach, CA",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0f0f11] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-[#442450] to-[#07a7a7] text-transparent bg-clip-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-[#111111] border border-[#222] shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#1a1a1a] border border-[#333] text-white"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1a1a1a] border border-[#333] text-white"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-[#1a1a1a] border border-[#333] text-white resize-none"
              />
              <Button
                type="submit"
                className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-[#442450] to-[#07a7a7] hover:opacity-90 transition"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 bg-[#111111] border border-[#222] hover:border-[#442450] transition">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-[#07a7a711]">
                      <item.icon className="text-[#07a7a7]" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <a 
                        href={item.href}
                        className="text-gray-400 hover:text-[#442450] transition"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-[#131313] border border-[#222]">
              <h4 className="font-semibold mb-3 text-[#07a7a7]">Available for Work</h4>
              <p className="text-sm text-gray-400">
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
