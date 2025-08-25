import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Snowflake, ChefHat, Heart } from 'lucide-react';

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className='grid gap-4 md:grid-cols-4 p-4 '>
          <div className='space-y-2'>
            <Leaf />
            <div className='text-sm font-bold'>Fresh Ingredients</div>
            <div className='text-sm text-muted-foreground'>
              We use only ripe, seasonal fruits and organic add-ins for the purest taste in every sip.
            </div>
          </div>
          <div className='space-y-2'>
            <Snowflake />
            <div className='text-sm font-bold'>Cold & Ready</div>
            <div className='text-sm text-muted-foreground'>
              Smoothies are blended fresh and chilled — perfect for on-the-go energy or cooling down.
            </div>
          </div>
          <div className='space-y-2'>
            <ChefHat />
            <div className='text-sm font-bold'>Wellness First</div>
            <div className='text-sm text-muted-foreground'>
              Smoothies designed to energize your body and mind — from immunity to glow.
            </div>
          </div>
          <div className='space-y-2'>
            <Heart  />
            <div className='text-sm font-bold'>Made with Love</div>
            <div className='text-sm text-muted-foreground'>
              Each recipe is carefully curated in our kitchen with creativity and care.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default IconBoxes;