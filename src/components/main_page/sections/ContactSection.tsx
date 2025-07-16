import React from 'react';
import { Mail, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SectionHeader from '@/components/main_page/SectionHeader';
import ContactCard from '@/components/main_page/ContactCard';

const ContactSection = () => (
  <section className="py-12 animate-slide-up">
    <SectionHeader icon={<Mail className="h-6 w-6" />} title="Contact Information" />
    <div className="grid md:grid-cols-2 gap-8">
      <ContactCard title="Contact Information">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>Medibot Group</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>The University of Hong Kong, Hong Kong</span>
          </div>
        </div>
      </ContactCard>

      <ContactCard title="Emails">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>liuzicheng@connect.hku.hk</span>
            <Mail className="h-5 w-5 text-primary" />
            <span>u3637996@connect.hku.hk</span>

          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span>u3638106@connect.hku.hk</span>
            <Mail className="h-5 w-5 text-primary" />
            <span>u3641144@connect.hku.hk</span>
          </div>
        </div>
      </ContactCard>
    </div>
  </section>
);

export default ContactSection;