import React from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';


export default ({mentors}) => <Tiles>

  {
      mentors.map(mentor => <Tile>
        <Card thumbnail='https://picsum.photos/200/300/?random'
            heading={mentor.name}
            label={mentor.profession}
            description={mentor.description}
            margin="medium"
            key={mentor.id} />
    </Tile>)
  }
</Tiles>