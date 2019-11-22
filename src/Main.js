import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Kylian Mbappe, the Future of Soccer</Link>
     <p className="title">Date: JULY 23, 2018</p>
     <img src={process.env.PUBLIC_URL + '/Mbappe.jpg' } alt="Sports"  />
     <p> At 19, France's Kylian Mbappe has been deemed the next great player of his generation, the Messi or Ronaldo for an entirely new era of fans. «If you gave me a billion , I wouldn't sell him,» Paris Saint-Germain president Nasser Al-Khelaifi said of Mbappe in May. He may be young, but his arrival on the international stage has been nothing short of a superstar's coming-out party. When he left Monaco for PSG last August, his €145 million transfer fee was enough to make him the second-most expensive player in the world .
        He became the first teenager since Pele in 1958 to score two goals in the international tournament. The greatness and grace he has displayed are part of why Mbappe already has 14 million-plus followers on Instagram. On top of it all, Mbappe has become the youngest ever celebrity to have his likeness immortalized in wax at the famous Musee Grevin in Paris. That Mbappe has blossomed so quickly shouldn't be a surprise to anyone who's followed him since his days at Monaco.
        «This is only just the beginning,» Mbappe said. « 's something you see when you're at the end, trying to anticipate what's going to happen. There's a long way to go before I stop playing. I'm not thinking about my legacy yet».</p>
     </li>
     <li>
     <Link className="title" exact to="/Blog2">The Transformative Power of LeBron James</Link>
     <p className="title">Date: JULY 16, 2014</p>
     <img src={process.env.PUBLIC_URL + '/Lebron.jpg' } alt="Sports"  />
     <p>If we've learned anything in the days since LeBron James announced that he'll return to his native Northeast Ohio to play again for the Cleveland Cavaliers, it's that the reports of locals burning his jersey had been greatly exaggerated.
        Not only did the majority of Cavs fans never burn their gear, they didn't throw it out or hand it off to Goodwill, either. Hell, even Dan Gilbert and his family hung on to their LeBron gear, per the Cavs' owner's tweet: «My 8-year-old: 'Daddy, does this mean I can finally wear my Lebron jersey, again?'...Yes it does, son. Yes it does!»
        No, those jerseys at Gilbert's house and others were tucked safely in closets and basements, tacit reminders of the hope Northeast Ohioans held that LeBron might one day come home and they'd wear them again.
        Last Friday night, they did.
        Here there's reason for hope in that so much about this basketball story is unprecedented, not least the star's stated reasons for coming home.
        LeBron's free agency leaves no choice but to grant that, for better or worse, sports represent the most accessible common narrative in America today. From here, even the most cynical should appreciate the difficulty in imagining a more positive sports story than the one that LeBron is writing in Cleveland: The most celebrated athlete in the world returning to his struggling hometown mainly because he knows that it's where he can make the greatest positive impact. «I feel my calling here goes above basketball,» James said. «I have a responsibility to lead, in more ways than one, and I take that very seriously. My presence can make a difference in Miami, but I think it can mean more where I'm from».
        It's the opposite of Charles Barkley's «I'm not a role model,» and it communicates aspirations well beyond anything Michael Jordan accomplished on his run as the world's best basketball player and shoe salesman.
     </p>
     </li>
     <li>
     <Link className="title" exact to="/Blog3">Sachin: a Billion Dreams</Link>
     <p className="title">Date: MAY 27, 2017</p>
     <img src={process.env.PUBLIC_URL + '/Sachin.jpg' } alt="Sports"  />
     <p>As if the life and times of Sachin Tendulkar weren’t prominent enough, the little master now has his own film, directed by James Erskine, out in cinemas now. The Cricket Blog was lucky enough to get invited along to an advance screening of the film.
        I must admit that I was expecting the film to be comprised of near total sycophantic guff, although Erskine’s stellar work on Pantani: The Accicdental Death of a Cyclist filled me with optimism. It’s hard to quantify what Tendulkar means to India. This film carefully builds the profile of an icon and whilst yes, is sycophantic in part , is worth the time investment of cricket fans everywhere.
        It was clearly the lowest ebb of Tendulkar’s career as he faced questions over his future, a creaking body and threats from members of the public.
        The one thing that is clearly presented throughout is the impact Tendulkar had on his own family. Armed guards were present in their household after the 2007 World Cup and his family lived every low point with him and suffered nervously through the highs. Everything that needed to be said about Tendulkar had already been said. Whilst it was clearly an obsession of Tendulkar’s, it doesn’t fit in as something that needed to happen. It was too perfect to appear believable in a film, but this isn’t a work of fiction.
        Perhaps, however, this was the moment at which he should have retired.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;