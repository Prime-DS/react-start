import upcomingEvents from '../upcoming-events.json';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/Eventboard';

export const App = () => {
  return (
    <>
      < PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
}