import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

export class NavMenu extends Component {
    render() {
        return (
            <div className='ms-NavExample-LeftPane'>
                <Nav
                    groups={
                        [
                            {
                                links: [
                                    {
                                        name: 'Assessment',
                                        url: './',
                                        links: [{
                                                name: 'Url Based',
                                                url: './urlAssess',
                                                key: 'key1'
                                            },
                                            {
                                                name: 'On-Premise',
                                                url: './onpremise',
                                                key: 'key2'
                                            }],
                                        isExpanded: true
                                    }
                                ]
                            }
                        ]
                    }
                    expandedStateText={ 'expanded' }
                    collapsedStateText={ 'collapsed' }
                    selectedKey={ 'key3' }
                />
            </div>
        );
    }
}

export default NavMenu;