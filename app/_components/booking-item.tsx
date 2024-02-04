import { Booking, Prisma } from '@prisma/client';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { format, isFuture, isPast } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirmed = isFuture(booking.date);
  return (
    <Card>
      <CardContent className="flex px-0 py-0">
        <div className="flex flex-[3] flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit" variant="secondary">
            {isBookingConfirmed ? 'Confirmado' : 'Finalizado'}
          </Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />

              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">{booking.barbershop.name}</h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center border-l border-solid border-secondary">
          <p className="text-sm capitalize">
            {format(booking.date, 'MMMM', {
              locale: ptBR,
            })}
          </p>
          <p className="text-2xl">{format(booking.date, 'dd')}</p>
          <p className="text-sm">{format(booking.date, 'hh:mm')}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
