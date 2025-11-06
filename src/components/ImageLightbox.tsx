import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
  images: { src: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageLightbox = ({ images, currentIndex, onClose, onNext, onPrev }: ImageLightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
        aria-label="Cerrar"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 text-white hover:text-primary transition-colors z-10"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
      )}

      {/* Image */}
      <div className="max-w-7xl max-h-[90vh] px-16">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <p className="text-white text-center mt-4 text-lg font-semibold">
          {currentImage.title}
        </p>
        <p className="text-white/60 text-center text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 text-white hover:text-primary transition-colors z-10"
          aria-label="Imagen siguiente"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      )}

      {/* Background click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImageLightbox;
