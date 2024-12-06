import React from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">contact@stitchcraft.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Phone & WhatsApp</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Send className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Telegram</h3>
                <p className="text-gray-600">@stitchcraft</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Your message"
              />
            </div>
            <Button size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}