
import { Link } from 'react-router-dom';
import { Footprints } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link to="#" className="flex items-center gap-2">
            <Footprints className="h-6 w-6" />
            <span className="font-bold text-lg">Acme SaaS</span>
          </Link>
          <p className="text-muted-foreground">Empower your business with our cutting-edge SaaS solutions.</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Company</h3>
          <Link to="#" className="hover:underline">
            About
          </Link>
          <Link to="#" className="hover:underline">
            Team
          </Link>
          <Link to="#" className="hover:underline">
            Careers
          </Link>
          <Link to="#" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Products</h3>
          <Link to="#" className="hover:underline">
            Features
          </Link>
          <Link to="#" className="hover:underline">
            Pricing
          </Link>
          <Link to="#" className="hover:underline">
            Integrations
          </Link>
          <Link to="#" className="hover:underline">
            Roadmap
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Subscribe</h3>
          <p className="text-muted-foreground">Get the latest news and updates from Acme SaaS.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
