import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SectionHeader from '@/components/ui/main_page/SectionHeader';
import ContactCard from '@/components/ui/main_page/ContactCard';

const ContactSection = () => (
  <section className="py-12 animate-slide-up">
    <SectionHeader icon={<Mail className="h-6 w-6" />} title="Get In Touch" />
    <div className="grid md:grid-cols-2 gap-8">
      <ContactCard title="Contact Information">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>lixinlei@connect.hku.hk</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>The University of Hong Kong, Hong Kong</span>
          </div>
        </div>
      </ContactCard>

      <ContactCard title="Social Media">
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="icon" asChild className="sci-fi-button animate-glow">
            <a href="https://www.linkedin.com/in/xinlei-l-968057132/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5 text-primary" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="sci-fi-button animate-glow">
            <a href="https://github.com/EricLee12118" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="h-5 w-5 text-primary" />
            </a>
          </Button>
        </div>
      </ContactCard>
    </div>
  </section>
);

export default ContactSection;