import React from 'react';
import { Star, ShieldCheck, Instagram } from 'lucide-react';
import { Review, SiteSettings } from '../types/index.js';
import { ReviewGallery } from '../components/ReviewGallery.js';

interface ReviewsPageProps {
  reviews: Review[];
  settings: SiteSettings;
  isAdmin: boolean;
  onOpenAdmin: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  reviews,
  settings,
  isAdmin,
  onOpenAdmin
}) => {
  return (
    <div className="space-y-6 pb-16">
      <ReviewGallery
        reviews={reviews}
        settings={settings}
        isAdmin={isAdmin}
        onOpenAdmin={onOpenAdmin}
      />
    </div>
  );
};
