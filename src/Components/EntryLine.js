import React from 'react';
import {Segment, Grid, Icon} from 'semantic-ui-react';

function EntryLine({id,Description, value, isExpense=false, deleteEntry}) {
    return (
        <Segment color={isExpense ? 'red': 'green'}>
        <Grid columns={3} texAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">{Description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered/>
              <Icon name="trash" bordered onClick={()=>deleteEntry(id)}/>
            </Grid.Column>
          </Grid.Row>
 
        </Grid>
      </Segment>
    )
}

export default EntryLine
