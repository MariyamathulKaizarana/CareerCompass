'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Career } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'overflow-hidden rounded-full',
  {
    variants: {
      size: {
        default: 'h-10 w-10',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);


interface FavoriteButtonProps extends VariantProps<typeof buttonVariants> {
  career: Career;
  className?: string;
}

export default function FavoriteButton({ career, size, className }: FavoriteButtonProps) {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const favoriteRef = useMemoFirebase(() => {
    if (!user) return null;
    return doc(firestore, 'users', user.uid, 'career_preferences', career.id);
  }, [firestore, user, career.id]);

  const { data: favorite, isLoading } = useDoc(favoriteRef);
  
  const isFavorite = !!favorite;

  const handleFavoriteToggle = async () => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Not Logged In',
        description: 'You need to be logged in to favorite careers.',
      });
      return;
    }

    if (!favoriteRef) return;

    if (isFavorite) {
      // Non-blocking delete
      deleteDoc(favoriteRef).catch(e => console.error("Failed to unfavorite", e));
      toast({
        title: 'Unfavorited!',
        description: `${career.title} removed from your favorites.`,
      });
    } else {
      const careerDataToSave = {
        id: career.id,
        slug: career.slug,
        title: career.title,
        stream: career.stream,
        description: career.description,
        isFavorite: true,
      };
      // Non-blocking set
      setDoc(favoriteRef, careerDataToSave).catch(e => console.error("Failed to favorite", e));
      toast({
        title: 'Favorited!',
        description: `${career.title} added to your favorites.`,
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(buttonVariants({ size }), className)}
      onClick={handleFavoriteToggle}
      disabled={isLoading}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={cn(
          'h-5 w-5 transition-all',
          isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
        )}
      />
    </Button>
  );
}
