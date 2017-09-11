import React, { Component } from 'react';
import {Button,
        Icon,
        Container,
        Image,
        Header,
        Grid,
        Segment,
        Divider} from 'semantic-ui-react';

export default class Home extends Component {
  render() {
    let style = {
      textAlign: 'center'
    }
    return (
      <div className="Home">
        <Container>
          <Header as='h2' style={style}>Employee Owned Since 1958</Header>
        </Container>
        <Grid columns={3} padded>
          <Grid.Row>
            <Grid.Column>
              <Image
                fluid
                label={{ as: 'a', color: 'blue', content: 'Full Service Leasing', ribbon: true}}
                src='http://www.mendonleasing.com/images/straight.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image
                fluid
                label={{ as: 'a', color: 'blue', content: 'Rental Services', ribbon: true}}
                src='http://www.mendonleasing.com/images/flatbed.jpg' />
            </Grid.Column>
            <Grid.Column>
              <Image
                fluid
                label={{ as: 'a', color: 'blue', content: 'Our Fleet', ribbon: true}}
                src='http://www.mendonleasing.com/images/straight.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Segment inverted vertical style={{ padding: '9em, 0em', backgroundColor: 'blue'}}>
          <Container>
            <Grid inverted stackable>
              <Grid.Row>
                <Container fluid>
                  <Header inverted as='h3'>
                    Mendon features the finest, most fuel efficient vehicles available.
                    Among them you will find top brands including Hino, UD, Freightliner,
                    Ford, Isuzu and other top manufacturers. We offer a wide range of
                    vehicles including refrigerated, freezer and lift-gate equipped vehicles.
                  </Header>
                </Container>
              </Grid.Row>
              <Grid.Row>
                <Header inverted as='h3'>
                  For our lease customers with special requirements, vehicles are built
                  to specification. Your advertising and logo can be designed and
                  professionally installed by our award winning art department.
                </Header>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
