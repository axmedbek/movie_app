import React from 'react'
import 
{ Container , 
    List,
    Segment
    } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div style={{ position:'fixed',width : '100%',bottom : '0'}}>
      <Segment inverted  vertical>
          <Container textAlign='center'>
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
    </div>
  )
}

Footer.propTypes = {

}

export default Footer

