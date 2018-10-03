import React, { Component } from 'react';
import { menuStyle, fixedMenuStyle} from '../helpers/style_helpers';
import {
    Container,Menu,Visibility,Image
} from 'semantic-ui-react';
import { Link ,NavLink } from 'react-router-dom';


class Header extends Component {
    state = {
        menuFixed: null,
    }


    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: null })

    render() {

        const { menuFixed } = this.state

        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container>
                            <Menu.Item as={Link} to="/" exact="true">
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                                <Menu.Item header>Home Page</Menu.Item>
                            </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies" exact={true}>
                                Movies
              </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies/new">Add New</Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>

            </div>
        );
    }
}

export default Header;
