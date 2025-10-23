import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export const GalleryModal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  onNext,
  onPrev,
}: GalleryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          
          {onPrev && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={onPrev}
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>
          )}
          
          {onNext && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={onNext}
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            {description && <p className="text-sm opacity-90">{description}</p>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
