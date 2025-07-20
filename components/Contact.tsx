"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent!", {
          description: data.message,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send", {
          description: data.message || "Something went wrong.",
        });
      }
    } catch (error: any) {
      toast.error("Network error", {
        description: error.message || "Unable to reach server.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brbergenholtz.19@gmail.com",
      href: "mailto:brbergenholtz.19@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Long Beach, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0f0f11] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-[#442450] to-[#07a7a7] text-transparent bg-clip-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222] shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#0a0a0a] border border-[#333] text-white"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#0a0a0a] border border-[#333] text-white"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-[#0a0a0a] border border-[#333] text-white resize-none"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-[#442450] to-[#07a7a7] hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Info Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Say Hi!</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you have a question or want to connect, I am always open to chat.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222] hover:border-[#442450] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#07a7a711]">
                    <item.icon className="text-[#07a7a7]" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <a href={item.href} className="text-gray-400 hover:text-[#442450] transition">
                      {item.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#222]">
              <h4 className="font-semibold mb-3 text-[#07a7a7]">Available for Work</h4>
              <p className="text-sm text-gray-400">
                I'm currently open to full-time and freelance roles. Let's build something great!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
