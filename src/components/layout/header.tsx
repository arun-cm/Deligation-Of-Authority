import React, { Component } from "react";
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { CommandBar, Persona, PersonaSize, SearchBox, Nav } from 'office-ui-fabric-react';
import { withRouter, Link } from "react-router-dom";


// const FabricNav = withRouter(({ history }) => (
//     <Nav
//         onLinkClick={(event: any, element: any) => {
//             event.preventDefault();
//             history.push(element.url);
//         }}
//         groups={[
//             {
//                 links: [
//                     {
//                         name: 'Home',
//                         url: '/',
//                         key: 'home',
//                     },
//                     {
//                         name: 'Users',
//                         url: '/users',
//                         key: 'users',
//                     },
//                     {
//                         name: 'Action log',
//                         url: '/actionlog',
//                         key: 'actionlog',
//                     },
//                 ]
//             }
//         ]}
//     />
// ));

// export default class Header extends React.Component {
//     render() {
//         return (
//             <div className="left-nav">
//                 <FabricNav />
//             </div>
//         )
//     }
// }




class Header extends Component {
    constructor(props: any) {
        super(props);
        initializeIcons(/* optional base url */);
    }

    render(): JSX.Element {
        return (
            <div>
                <CommandBar
                    items={this.getItems()}
                    overflowItems={this.getOverlflowItems()}
                    overflowButtonProps={{ ariaLabel: 'More commands' }}
                    farItems={this.getFarItems()}
                    ariaLabel={'Use left and right arrow keys to navigate between commands'}
                />
            </div>
        );
    }

    // Data for CommandBar
    private getItems = () => {
        return [
            {
                key: 'home',
                name: 'Deligation Of Authority',
                cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
                iconProps: {
                    iconName: 'Home',
                },
                href: '/users',
                //onClick: (e: any) => { e.preventDefault(); history.pushState({}, "", '/users') }
            },
            {
                key: 'actionlog',
                name: 'Action Log',
                iconProps: {
                    iconName: 'World'
                },
                href: '/actionlog',
            },
            {
                key: 'share',
                name: 'Share',
                iconProps: {
                    iconName: 'Share'
                }
            },
            {
                key: 'download',
                name: 'Reports',
                iconProps: {
                    iconName: 'Download'
                },
                onClick: () => console.log('Download')
            },
            {
                key: 'search',
                name: 'Search',
                iconProps: {
                    iconName: 'Search'
                },
                onRender: (): any => {
                    return <SearchBox placeholder="Search" autoComplete="on" className="searchBox" styles={{ root: { width: "250px" } }} />
                }
            },
        ];
    };


    private getOverlflowItems = () => {
        return [
            {
                key: 'move',
                name: 'Move to...',
                onClick: () => console.log('Move to'),
                iconProps: {
                    iconName: 'MoveToFolder',
                }
            },
            {
                key: 'copy',
                name: 'Copy to...',
                onClick: () => console.log('Copy to'),
                iconProps: {
                    iconName: 'Copy'
                }
            },
            {
                key: 'rename',
                name: 'Rename...',
                onClick: () => console.log('Rename'),
                iconProps: {
                    iconName: 'Edit'
                }
            }
        ];
    };

    private getFarItems = () => {
        return [
            // {
            //     key: 'sort',
            //     name: 'Sort',
            //     iconProps: {
            //         iconName: 'SortLines'
            //     },
            //     onClick: () => console.log('Sort')
            // },
            // {
            //     key: 'tile',
            //     name: 'Grid view',
            //     iconProps: {
            //         iconName: 'Tiles'
            //     },
            //     iconOnly: true,
            //     onClick: () => console.log('Tiles')
            // },
            // {
            //     key: 'info',
            //     name: 'Info',
            //     iconProps: {
            //         iconName: 'Info'
            //     },
            //     iconOnly: true,
            //     onClick: () => console.log('Info')
            // }
            // ,
            {
                key: 'user',
                name: 'User settings',
                iconProps: {
                    iconName: 'AccountManagement'
                },
                iconOnly: true,
                onClick: () => console.log('Info')
            },
            {
                key: 'profile',
                name: 'profile',
                commandBarButtonAs: this.createUserPersona
            }
        ];
    };

    createUserPersona() {
        return (
            <Persona text="Arun CM" size={PersonaSize.size32} />
        );
    };
}

export default Header;

