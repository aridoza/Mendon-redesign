import React, { Component } from 'react';
import { Divider, Segment, Container, Grid, Header, List } from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    let style = {
      textAlign: 'center'
    }
    return (
      <div className="Footer">
        <Divider />
        <Segment inverted vertical style={{ padding: '7em 0em', backgroundColor: 'grey'}}>
          <Container>
            <Grid columns={2} divided inverted stackable>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4'>An Employee Owned Company</Header>
                </Grid.Column>
                <Grid.Column>
                  <Grid columns={3} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <Header inverted as='h4'>Privacy Policy</Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Header inverted as='h4'>Terms of Use</Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Header inverted as='h4'>Copyright 2017 Mendon Leasing</Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
